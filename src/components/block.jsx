import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./block.css";

import Image from "./small_image";

const Block = ({block}) => {

  return (
    <div className="block">
      <header className="block__header">
        <h3>{block.headling}</h3>
      </header>
      <div className="line"></div>
      <main className="block__main">
        <div className="block__images">
          {block.images.map((image) => (
            <Image link={image} key={image}/>
          ))}
        </div>
        <p className="block__text">{block.content}</p>
      </main>
      <div className="block__read-more" onClick={()=> {}}>
        Читать далее
      </div>
    </div>
  );
};

export default Block;
