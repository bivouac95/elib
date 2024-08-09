import React from "react";
import ReactDOM from "react-dom/client";
import { useLocation } from "react-router";
import "./header__menu.css";

import { useNavigate } from "react-router";

const HeaderMenu = ({ isMenuOpen, toggle }) => {
  const navigate = useNavigate();
  const path = useLocation().pathname;
  

  function NavigateTo(newpath) {
    navigate(newpath);
    toggle();
    if (path === newpath) return;
    if (newpath[1] === ":") navigate(0);
  }


  return (
    <main className="header__menu" style={{ display: isMenuOpen ? "flex" : "none" }}>
      <nav onClick={() => NavigateTo("/:news")}>Новости</nav>
      <nav onClick={() => NavigateTo("/files")}>Файлы</nav>
      <nav onClick={() => NavigateTo("/:articles")}>Статьи</nav>
      <nav onClick={() => NavigateTo("/feedback")}>Обратная связь</nav>
      <nav onClick={() => NavigateTo("/:elib")}>Элктронная библиотека</nav>
      <nav onClick={() => NavigateTo("/gallery")}>Фотогалерея</nav>
    </main>
  );
};

export default HeaderMenu;
