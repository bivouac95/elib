import React from "react";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";

import "./admin_page.css";
import "./page.css";

import admin from "../mobx_components/admin_main_state.js";

const AdminPage = observer(() => {
  const navigate = useNavigate();
  admin.setNavigete(navigate);

  return (
    <div className="page page--admin">
      <Header />
        <main className="main_content">
          <div className="section_name">
            <h2>Информационно библиотечный центр</h2>
            <h1>Админ-панель</h1>
            <div className="line line--black"></div>
          </div>
          <div className="section_column">
            <div className="admin__menu">
              <div className="block block--admin">
                <header className="block__header">
                  <h3>Выберите опцию</h3>
                  <div className="line line--white"></div>
                </header>
                <main className="block__main">
                  <div
                    className="ui admin__menu__option"
                    onClick={() => {
                      admin.open("news");
                    }}
                  >
                    Новости
                  </div>
                  <div
                    className="ui admin__menu__option"
                    onClick={() => {
                      admin.open("articles");
                    }}
                  >
                    Статьи
                  </div>
                  <div
                    className="ui admin__menu__option"
                    onClick={() => {
                      admin.open("gallery");
                    }}
                  >
                    Фотогалерея
                  </div>
                  <div
                    className="ui admin__menu__option"
                    onClick={() => {
                      admin.open("files");
                    }}
                  >
                    Файлы
                  </div>
                  <div
                    className="ui admin__menu__option"
                    onClick={() => {
                      admin.open("elib");
                    }}
                  >
                    Электронные библиотеки
                  </div>
                </main>
              </div>

              <aside
                className="admin__actions-menu"
                style={admin.isOpen ? { display: "flex" } : { display: "none" }}
              >
                <div className="admin__actions">
                  <div
                    className="admin__actions__item ui"
                    onClick={() => {
                      admin.action("create");
                    }}
                  >
                    Создать
                  </div>
                  <div
                    className="admin__actions__item ui"
                    onClick={() => {
                      admin.action("delete");
                    }}
                  >
                    Удалить
                  </div>
                  <div
                    className="admin__actions__item ui"
                    onClick={() => {
                      admin.action("update");
                    }}
                  >
                    Редактировать
                  </div>
                </div>
              </aside>
            </div>
          </div>

          <span className="text">или</span>
          <a className="ui" href="https://forms.gle/UuPXkk9xwKEb2ffh8">
            Предложить прочие изменения для сайта
          </a>
        </main>
        <Footer />
    </div>
  );
});

export default AdminPage;
