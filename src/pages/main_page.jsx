import React from "react";
import Header from "../header.jsx";
import Footer from "../footer.jsx";
import Block from "../block.jsx";
import "./main_page.css";
import "./page.css";

export default function Main() {
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
            <h2>Новости</h2>
            <button>
              <img src="./src/assets/page_shift.png" alt=".-." />
            </button>
          </div>
          <div className="line"></div>
        </div>
        <Block />
        <Block />
      </main>
      <Footer />
    </div>
  );
}
