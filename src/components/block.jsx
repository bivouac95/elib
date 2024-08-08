import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./block.css";

const Block = ({block}) => {

  return (
    <div className="block">
      <header className="block__header">
        <h3>{block.headling}</h3>
      </header>
      <div className="line"></div>
      <main className="block__main">
        <p className="block__text">{block.content}</p>
      </main>
      <div className="block__read-more" onClick={()=> {}}>
        Читать далее
      </div>
    </div>
  );
};

export default Block;
