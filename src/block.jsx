import React from "react";
import ReactDOM from "react-dom/client";
import "./block.css";

export default function Block() {
  return (
    <div className="block">
      <header className="block__header">
        <h3>Заголовок</h3>
      </header>
      <div className="line"></div>
      <main className="block__main">
        <p className="text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe et eum
          necessitatibus amet minima vel, consequatur quod maiores facilis
          blanditiis! Recusandae porro facilis quae consectetur unde deserunt
          consequuntur assumenda minima.
        </p>
        <p className="block__main__subsection">
          <p className="text"> Заголовок подсекции</p>
          <div className="line"></div>
          <p className="ui">
            Ученье <br />
            Это <br />
            СВЕТ!
          </p>
        </p>
      </main>
      <div className="block__read-more">Читать далее</div>
    </div>
  );
}
