import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./block.css";

import Image from "./small_image";

function format(string) {
  const date = new Date(string);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("ru", options);
}

const Block = ({ block }) => {
  switch (block.page) {
    case 1:
    case 3:
      return (
        <div className="block">
          <header className="block__header">
            <h3>{block.headling}</h3>
          </header>
          <div className="line"></div>
          <main className="block__main">
            <div className="block__images">
              {block.images ? block.images.map((image) => (
                <Image link={image} key={image} />
              )) : []}
            </div>
            <p className="block__text">{block.content}</p>
          </main>
          <div className="block__read-more" onClick={() => {}}>
            Читать далее
          </div>
        </div>
      );

    case 2:
      return (
        <div className="block">
          <header className="block__header">
            <h3>{block.headling}</h3>
          </header>
          <div className="line"></div>
          <main className="block__main">
            <p className="ui">{format(block.date)}</p>
          </main>
          <div className="block__read-more" onClick={() => {}}>
            <div className="block__read-more ui">Скачать</div>
            <button
              className="ui_button"
              onClick={() => window.open(block.content, "_blank")}
            >
              <img src="./page/download.svg" alt="" />
            </button>
          </div>
        </div>
      );
    
      case 5:
        return (
          <div className="large_image">
            <div className="large_image__info">{format(block.date)}</div>
            <img src={block.content} alt="" className="large_image__image"/>
            <img src={block.content} alt="" className="large_image__backgroung"/>
          </div>
        );
  }
};

export default Block;
