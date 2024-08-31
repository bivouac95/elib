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

import block from "../mobx_components/block_state.js";
import page from "../mobx_components/pages_state.js";
import admincreate from "../mobx_components/admin_create_state.js";

const AdminNew = observer(() => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const flag = searchParams.get("flag");
  let id = "";

  useEffect(() => {
    async function init() {
      id = searchParams.get("id");
      if (flag === "update") {
        block.update(id);
      } else {
        block.set("loaded", false);
        await page.update(id);
        block.set("page", page.id);
        block.set("headling", "");
        block.set("images", []);
        block.set("content", "");
        block.set("loaded", true);
      }
    }
    init();
  }, [flag]);

  let content = (
    <main className="main_content">
      <div className="section_name">
        <h2>Информационно библиотечный центр</h2>
        <h1>Админ-панель</h1>
        <div className="line line--black"></div>
      </div>
      <div className="loader">
        <FadeLoader color="rgb(36, 39, 63)" />
      </div>
    </main>
  );

  if (block.loaded) {
    switch (block.page) {
      case 1:
        content = (
          <main className="main_content">
            <div className="section_name">
              <h2>Информационно библиотечный центр</h2>
              <h1>Админ-панель</h1>
              <div className="line line--black"></div>
            </div>
            {block.loaded ? (
              <div className="section_column">
                <div className="block block--admin">
                  <aside
                    className="admin__actions-menu"
                    style={
                      admincreate.isPhotoMenuOpen
                        ? { display: "flex" }
                        : { display: "none" }
                    }
                  >
                    <div className="admin__actions add-photo__menu">
                      <textarea
                        className="form form--url"
                        value={admincreate.newPhotoUrl}
                        style={{
                          height: "auto",
                          overflowY: "hidden",
                        }}
                        onChange={(e) => {
                          admincreate.setNewPhotoUrl(e.target.value);
                          e.target.style.height = "auto";
                          e.target.style.height = e.target.scrollHeight + "px";
                        }}
                        placeholder="URL фотографии"
                      ></textarea>
                      <div className="block__return">
                        <span className="ui">Добавить фотографию</span>
                        <button
                          className="ui_button"
                          onClick={() => {
                            admincreate.closePhotoMenu();
                            block.set("images", [
                              ...block.images,
                              admincreate.newPhotoUrl,
                            ]);
                            admincreate.setNewPhotoUrl("");
                          }}
                        >
                          <img src="./page/save.svg" alt="" />
                        </button>
                      </div>
                    </div>
                  </aside>

                  <header className="block__header">
                    <textarea
                      className="form form--h3"
                      value={block.headling}
                      placeholder="Введите заголовок"
                      onChange={(e) => block.set("headling", e.target.value)}
                    />
                    <div className="line line--white"></div>
                  </header>
                  <main className="block__main" style={{ gap: "20px" }}>
                    <div className="block__images">
                      {block.images
                        ? block.images.map((image, index) => (
                            <div
                              className="admin__list__option"
                              key={image + index + "list"}
                            >
                              <div
                                className="option__hover"
                                key={image + index + "hover"}
                                onClick={() => {
                                  block.set(
                                    "images",
                                    block.images.filter((i) => i !== image)
                                  );
                                }}
                              >
                                <h3>Удалить</h3>
                              </div>
                              <Image link={image} key={image + index} />
                            </div>
                          ))
                        : []}
                      <div
                        className="admin__add-photo"
                        style={
                          block.images
                            ? block.images.length < 3
                              ? { display: "flex" }
                              : { display: "none" }
                            : { display: "flex" }
                        }
                        onClick={() => {
                          admincreate.setNewPhotoUrl("");
                          admincreate.openPhotoMenu();
                        }}
                      >
                        <button>
                          <img src="./page/plus.svg" alt="" />
                        </button>
                        <span className="ui">{`Фото (${
                          block.images ? block.images.length : 0
                        }/3)`}</span>
                      </div>
                    </div>
                    <textarea
                      className="form form--text"
                      value={block.content}
                      placeholder="Введите наполнение"
                      onChange={(e) => block.set("content", e.target.value)}
                    />
                  </main>
                </div>
                <div className="block__nav">
                  <div className="block__return">
                    <span className="ui">Сохранить</span>
                    <button
                      className="ui_button"
                      onClick={() => {
                        switch (flag) {
                          case "updete":
                            block.saveData();
                            navigate("/admin");
                            break;
                          case "create":
                            block.createBlock();
                            navigate("/admin");
                            break;
                        }
                      }}
                    >
                      <img src="./page/save.svg" alt="" />
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
                      <img src="./page/go_back.svg" alt="" />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="loader">
                <FadeLoader color="rgb(36, 39, 63)" />
              </div>
            )}
          </main>
        );
        break;
      case 2:
      case 3:
        content = (
          <main className="main_content">
            <div className="section_name">
              <h2>Информационно библиотечный центр</h2>
              <h1>Админ-панель</h1>
              <div className="line line--black"></div>
            </div>
            {block.loaded ? (
              <div className="section_column">
                <div className="block block--admin">
                  <header className="block__header">
                    <textarea
                      className="form form--h3"
                      value={block.headling}
                      placeholder="Введите заголовок"
                      onChange={(e) => block.set("headling", e.target.value)}
                    />
                    <div className="line line--white"></div>
                  </header>
                  <main className="block__main" style={{ gap: "20px" }}>
                    <textarea
                      className="form form--text"
                      value={block.content}
                      placeholder={
                        block.page == 2
                          ? "Введите ссылку на файл"
                          : "Введите наполнение"
                      }
                      onChange={(e) => block.set("content", e.target.value)}
                    />
                  </main>
                </div>
                <div className="block__nav">
                  <div className="block__return">
                    <span className="ui">Сохранить</span>
                    <button
                      className="ui_button"
                      onClick={() => {
                        switch (flag) {
                          case "updete":
                            block.saveData();
                            navigate("/admin");
                            break;
                          case "create":
                            block.createBlock();
                            navigate("/admin");
                            break;
                        }
                      }}
                    >
                      <img src="./page/save.svg" alt="" />
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
                      <img src="./page/go_back.svg" alt="" />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="loader">
                <FadeLoader color="rgb(36, 39, 63)" />
              </div>
            )}
          </main>
        );
        break;
      case 4:
        content = (
          <main className="main_content">
            <div className="section_name">
              <h2>Информационно библиотечный центр</h2>
              <h1>Админ-панель</h1>
              <div className="line line--black"></div>
            </div>
            <div className="section_column">
              <div className="loader">
                <span className="ui">Страница еще в работе</span>
              </div>

              <div className="block__return">
                <span className="ui">Вернуться назад</span>
                <button
                  className="ui_button"
                  onClick={() => {
                    navigate("/admin");
                  }}
                >
                  <img src="./page/go_back.svg" alt="" />
                </button>
              </div>
            </div>
          </main>
        );
        break;
      case 5:
        content = (
          <main className="main_content">
            <div className="section_name">
              <h2>Информационно библиотечный центр</h2>
              <h1>Админ-панель</h1>
              <div className="line line--black"></div>
            </div>
            {block.loaded ? (
              <div className="section_column">
                <div className="block--image">
                  <div className="large_image">
                    <div className="large_image__menu">
                      <textarea
                        className="form form--h3"
                        value={block.headling}
                        onChange={(e) => block.set("headling", e.target.value)}
                        placeholder="Заголовок"
                      />
                      <input
                        type={"text"}
                        className="form ui"
                        value={block.content}
                        onChange={(e) => block.set("content", e.target.value)}
                        placeholder="URL изображения"
                      ></input>
                    </div>
                    <img
                      style={
                        block.content
                          ? { display: "block" }
                          : { display: "none" }
                      }
                      src={block.content}
                      alt=""
                      className="large_image__image"
                    />
                    <img
                      style={
                        block.content
                          ? { display: "block" }
                          : { display: "none" }
                      }
                      src={block.content}
                      alt=""
                      className="large_image__backgroung"
                    />
                  </div>
                </div>
                <div className="block__nav">
                  <div className="block__return">
                    <span className="ui">Сохранить</span>
                    <button
                      className="ui_button"
                      onClick={() => {
                        switch (flag) {
                          case "updete":
                            block.saveData();
                            navigate("/admin");
                            break;
                          case "create":
                            block.createBlock();
                            navigate("/admin");
                            break;
                        }
                      }}
                    >
                      <img src="./page/save.svg" alt="" />
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
                      <img src="./page/go_back.svg" alt="" />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="loader">
                <FadeLoader color="rgb(36, 39, 63)" />
              </div>
            )}
          </main>
        );
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
