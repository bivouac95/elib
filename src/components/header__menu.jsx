import React from "react";
import ReactDOM from "react-dom/client";
import { useLocation } from "react-router";
import "./header__menu.css";

import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

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
      <Link to="/:news"><nav onClick={toggle}>Новости</nav></Link>
      <Link to="/:files"><nav onClick={toggle}>Файлы</nav></Link>
      <Link to="/:articles"><nav onClick={toggle}>Статьи</nav></Link>
      <Link to="/feedback"><nav onClick={toggle}>Обратная связь</nav></Link>
      <Link to="/:elib"><nav onClick={toggle}>Элктронная библиотека</nav></Link>
      <Link to="/:gallery"><nav onClick={toggle}>Фотогалерея</nav></Link>
    </main>
  );
};

export default HeaderMenu;
