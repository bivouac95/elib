import React from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <nav className="footer__main">
      <main>
        <section className="footer__section">
          <h3>Контактная информация</h3>
          <div className="line line--white"></div>
          <a href="school54@gmail.com">school24@list.ru</a>
          <p>+7 (3022) 39-13-66</p>
          <p>672026, г.Чита, улица Гайдара, дом 3а</p>
        </section>
        <div className="footer__links">
          <a href="https://shs_chit_24.chita.zabedu.ru/">Перейти на сайт школы</a>
          <Link typeof="/:feedback">Обратная связь</Link>
        </div>
      </main>
    </nav>
  );
}
