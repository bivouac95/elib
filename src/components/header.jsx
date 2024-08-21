import React, { useState } from "react"; // Import useState
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import "./header.css";

import HeaderMenu from "./header__menu.jsx";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const toggle = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <nav className="header__main">
        <Link to="/">
          <button>
            <img src="./header/home.svg" alt="" />
          </button>
        </Link>
        <div className="search">
          <input type="text" placeholder="Поиск" />
          <button>
            <img src="./header/loopa.svg" alt="" />
          </button>
        </div>
        <button onClick={() => toggle()}>
          <img src="./header/burger.svg" alt="" />
        </button>
        <HeaderMenu
          isMenuOpen={isMenuOpen}
          toggle={toggle}
        />
      </nav>
    </>
  );
};

export default Header;
