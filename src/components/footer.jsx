import React from "react";
import ReactDOM from "react-dom/client";
import "./footer.css";

export default function Footer() {
  return (
    <nav className="footer__main">
      <main>
        <section className="footer__section">
          <h3>Контактная информация</h3>
          <div className="line"></div>
          <a href="mailto:school54@gmail.com">school54@gmail.com</a>
          <p>99-99-99</p>
          <p>672026, г.Чита, улица Гайдара, дом 3а</p>
        </section>
        <div className="footer__links">
          <a href="">Перейти на сайт школы</a>
          <a href="">Обратная связь</a>
        </div>
      </main>
    </nav>
  );
}
