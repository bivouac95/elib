import React from "react";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import Block from "../components/block.jsx";

import "./main_page.css";
import "./page.css";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";

import page from "../mobx_components/pages_state.js";

const Main = observer(() => {
  const key = "news";
  useEffect(() => {
    page.update(String(key).substring(1));
  }, []);

  return (
    <div className="page">
      <Header />
      <header className="header-section">
        <main>
          <h1>Информационно библиотечный центр</h1>
          <h2>МБОУ СОШ 24</h2>
        </main>
      </header>
      <main className="main_content">
        <div className="section_name">
          <div className="name_selection">
            <h2>{page.name}</h2>
            <button>
              <img src="./src/assets/page_shift.png" alt=".-." />
            </button>
          </div>
          <div className="line"></div>
        </div>
      </main>
      <Footer />
    </div>
  );
});

export default Main