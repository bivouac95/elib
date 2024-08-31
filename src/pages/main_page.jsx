import React from "react";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import Block from "../components/block.jsx";

import "./main_page.css";
import "./page.css";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import FadeLoader from "react-spinners/FadeLoader";

import page from "../mobx_components/pages_state.js";

const Main = observer(() => {
  const [key, setKey] = useState("news");
  const [name, setName] = useState("Новости");
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    page.update(String(key));
  }, []);

  function NavigateTo(event, key) {
    setKey(key);
    setName(event.target.innerText);
    page.update(key);
  }

  function HandleClick(event, navigate_path) {
    setIsOpen(false);
    if (navigate_path !== key) {
      NavigateTo(event, navigate_path);
    }
  }

  return (
    <div className="page">
      <Header />
      <header className="header-section">
        <img className="header__background" src="./page/first_screen.png" alt="" />
        <main>
          <h1>Информационно библиотечный центр</h1>
          <h2>МБОУ СОШ 24</h2>
        </main>
      </header>
      <main className="main_content">
        <div className="section_name">
          <div className="name_selection">
            <div
              className="name_selection__menu"
              style={{ display: isOpen ? "flex" : "none" }}
            >
              <nav onClick={(event) => HandleClick(event, "news")}>
                <h3> Новости </h3>
              </nav>
              <nav onClick={(event) => HandleClick(event, "files")}>
                <h3> Файлы </h3>
              </nav>
              <nav onClick={(event) => HandleClick(event, "articles")}>
                <h3> Статьи </h3>
              </nav>
              <nav onClick={(event) => HandleClick(event, "elib")}>
                <h3> Электронная библиотека </h3>
              </nav>
              <nav onClick={(event) => HandleClick(event, "gallery")}>
                <h3> Фотогалерея </h3>
              </nav>
            </div>
            <h2>{name}</h2>
            <button onClick={() => setIsOpen(!isOpen)}>
              <img
                src="./page/page_shift.png"
                alt=".-."
                style={{
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </button>
          </div>
          <div className="line line--black"></div>
        </div>
        {!page.loaded ? (
          <div className="loader">
            <FadeLoader color="rgb(36, 39, 63)" />
          </div>
        ) : (
          <>
            <div className={page.id == 5 ? "section_grid" : "section_column"}>
              {page.content.map((item) => (
                <Block key={item.id} block={item} />
              ))}
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
});
export default Main;
