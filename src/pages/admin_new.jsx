import React, { useEffect } from "react";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import Image from "../components/small_image";
import FadeLoader from "react-spinners/FadeLoader.js";

import { useSearchParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import ReactDOM from "react-dom/client";
import parse from "html-react-parser";

import "./admin_page.css";
import "./block_page.css";
import "./page.css";

import { createClient } from "@supabase/supabase-js";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_API;
const supabase = createClient(supabaseUrl, supabaseKey);

import block from "../mobx_components/block_state.js";

const AdminNew = observer(() => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const flag = searchParams.get("flag");
  let id = "";

  useEffect(() => {
    if (flag === "update") {
      id = searchParams.get("id");
      block.update(id); // Переносим сюда
    }
  }, [flag]);

  let content = "";

  

  switch (flag) {
    case "update": {
      content = (
        <>
          {block.loaded ? (
            <main className="main_content">
              <div className="section_name">
                <h2>Информационно библиотечный центр</h2>
                <h1>Админ-панель</h1>
                <div className="line line--black"></div>
              </div>
              <div className="section_column">
                <div className="block">
                  <header className="block__header">
                    <textarea className="form form--h3" value={block.headling} onChange={(e) => block.set("headling", e.target.value)}/>
                    <div className="line line--white"></div>
                  </header>
                  <main className="block__main">
                    <div
                      className="block__images"
                      style={
                        !block.images || block.images.length == 0
                          ? { display: "none" }
                          : {}
                      }
                    >
                      {block.images
                        ? block.images.map((image) => (
                          <div className = "admin__list__option" key={image + 'list'}>
                            <div className="option__hover" key={image + 'hover'}><h3>Удалить</h3></div>
                            <Image link={image} key={image} />
                          </div>
                          ))
                        : []}
                    </div>
                    <textarea className="form form--text" value={block.content} onChange={(e) => block.set("content", e.target.value)}/>
                  </main>
                </div>
                <div className="block__nav">
                  <div className="block__return">
                    <span className="ui">Сохранить</span>
                    <button
                      className="ui_button"
                      onClick={() => {
                        block.saveData();
                      }}
                    >
                      <img src="../page/save.svg" alt="" />
                    </button>
                  </div>
                  <div className="block__return">
                    <span className="ui">Вернуться назад</span>
                    <button
                      className="ui_button"
                      onClick={() => {
                        navigate("/admin");
                      }}
                    >
                      <img src="../page/go_back.svg" alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </main>
          ) : (
            <div className="loader">
              <FadeLoader color="#1c1c1c" />
            </div>
          )}
        </>
      );

      break;
    }
    case "create": {
      break;
    }
    default: {
      break;
    }
  }

  return (
    <div className="page page--admin">
      <Header />
      {content}
      <Footer />
    </div>
  );
});

export default AdminNew;
