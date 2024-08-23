import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { observer } from "mobx-react-lite";

import "./feedback.css";
import "./block.css";

import feedback from "../mobx_components/feedback_state.js";

const Feedback = observer(() => {
  return (
    <div className="block block--feedback">
        <div className="feedback__sent" style={{display: feedback.sent ? "flex" : "none"}}>
            <h3>Спасибо за ваш отзыв!</h3>    
        </div>

      <header className="block__header">
        <h3>Нам очень важно ваше мнение!</h3>
      </header>
      <div className="line line--white"></div>
      <main className="block__main">
        <div className="feedback__row">
          <span className="ui">Имя</span>
          <input
            className="feedback__form"
            type="text"
            value={feedback.name}
            onChange={(e) => feedback.setName(e.target.value)}
          />
        </div>
        <div className="feedback__row">
          <span className="ui">Фамилия</span>
          <input
            className="feedback__form"
            type="text"
            value={feedback.surname}
            onChange={(e) => feedback.setSurname(e.target.value)}
          />
        </div>
        <div className="feedback__row">
          <span className="ui">Email</span>
          <input
            className="feedback__form"
            type="email"
            value={feedback.email}
            onChange={(e) => feedback.setEmail(e.target.value)}
          />
        </div>
        <div className="feedback__row">
          <span className="ui">Тема</span>
          <input
            className="feedback__form"
            type="text"
            value={feedback.theme}
            onChange={(e) => feedback.setTheme(e.target.value)}
          />
        </div>
        <div className="feedback__row">
          <span className="ui">Текст письма</span>
          <textarea
            className="feedback__form form--text"
            value={feedback.text}
            onChange={(e) => feedback.setText(e.target.value)}
          />
        </div>
      </main>
      <div className="block__read-more ui">
        Отправить
        <button className="ui_button" onClick={() => feedback.send()}>
          <img src="./page/go.svg" alt="" />
        </button>
      </div>
    </div>
  );
});

export default Feedback;
