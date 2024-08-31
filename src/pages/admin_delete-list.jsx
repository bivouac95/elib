import React from "react";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import Block from "../components/block.jsx";
import FadeLoader from "react-spinners/FadeLoader";

import "./admin_page.css";
import "./block_page.css";
import "./page.css";

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_API;
const supabase = createClient(supabaseUrl, supabaseKey);

import page from "../mobx_components/pages_state.js";

async function deleteBlock(id) {
  const result = window.confirm("Вы действительно хотите удалить этот блок?");
  if (result) {
    const { error } = await supabase
      .from("articles")
      .delete()
      .eq("id", id);

    if (error) {
      console.error(error);
    }
    else{
      page.update();
    }
  }
}

const AdminDelete = observer(() => {
  let { key } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    page.update(String(key).substring(1));
  }, [key]);

  return (
    <div className="page">
      <Header />
      <main className="main_content">
        <div className="section_name">
          <h2>Информационно библиотечный центр</h2>
          <h1>Админ-панель</h1>
          <div className="line line--black"></div>
        </div>
        <h3>Выберите блок для удаления</h3>
        <div className="section_column">
          {page.loaded ? (
            <>
              <div className={page.id == 5 ? "section_grid" : "section_column"}>
                {page.content.map((item) => (
                  <div className="admin__list__option" key={item.id + "option"}>
                    <div className="option__hover" onClick={() => deleteBlock(item.id)}>
                      <h3>Удалить</h3>
                    </div>
                    <Block key={item.id + "block"} block={item} />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="loader">
              <FadeLoader color="#1c1c1c" />
            </div>
          )}
        </div>
        <div className="ui block__return">
              Вернуться назад
              <button className="ui_button" onClick={() => navigate(-1)}>
                <img src="./page/go_back.svg" alt="" />
              </button>
            </div>
      </main>
      <Footer />
    </div>
  );
});

export default AdminDelete;
