import React, { useState } from "react"; // Import useState
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./header.css";

import HeaderMenu from "./header__menu.jsx";
import search from "../mobx_components/search_state";
import { observer } from "mobx-react-lite";

const Header = observer(() => {
  const navigate = useNavigate();
  const [key, setKey] = useState("");

  const doSearch = async () => {
    navigate("/search" + "?key=" + key);
  };

  const handleKey = (event) => {
    console.log(event.key);
    if (event.key === "Enter") {
      doSearch();
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="header__main">
        <Link to="/">
          <button>
            <img src="./header/home.svg" alt="" />
          </button>
        </Link>
        <div className="search">
          <input
            type="text"
            placeholder="Поиск"
            value={key}
            onKeyDown={(e) => handleKey(e)}
            onChange={(e) => setKey(e.target.value)}
          />
          <button onClick={doSearch}>
            <img src="./header/loopa.svg" alt="" />
          </button>
        </div>
        <button onClick={() => toggle()}>
          <img src="./header/burger.svg" alt="" />
        </button>
        <HeaderMenu isMenuOpen={isMenuOpen} toggle={toggle} />
      </nav>
    </>
  );
});

export default Header;
