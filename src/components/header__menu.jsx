import React from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import "./header__menu.css";

import { useNavigate } from "react-router";


const HeaderMenu = ({style}) => {

  return (
    <main
      className="header__menu"
      style={style}
    >
      <nav>
        <Link to="/:news">Новости</Link>
      </nav>
      <nav>
        <Link to="/:files">Файлы</Link>
      </nav>
      <nav>
        <Link to="/:articles">Статьи</Link>
      </nav>
      <nav>
        <Link to="/:feedback">Обратная связь</Link>
      </nav>
      <nav>
        <Link to="/:elibrary">Элктронная библиотека</Link>
      </nav>
      <nav>
        <Link to="/:gallery">Фотогалерея</Link>
      </nav>
    </main>
  );
};

export default HeaderMenu;