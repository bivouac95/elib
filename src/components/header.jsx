import { makeAutoObservable, runInAction } from "mobx";
import { observer } from "mobx-react-lite";

import React, { useState } from "react"; // Import useState
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import "./header.css";

import HeaderMenu from "./header__menu.jsx";

class MenuOpen {
  open = false; // Initialize open state

  constructor() {
    makeAutoObservable(this);
  }

  toggle() {
    runInAction(() => {
      this.open = !this.open; // Toggle the open state
    });
  }
}

const Header = observer(() => {
  const [menuOpen] = useState(() => new MenuOpen()); // Use useState to retain the instance

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
        <button onClick={() => menuOpen.toggle()}>
          <img src="./header/burger.svg" alt="" />
        </button>
        <HeaderMenu
          style={menuOpen.open ? { display: "flex" } : { display: "none" }}
        />
      </nav>
    </>
  );
});

export default Header;
