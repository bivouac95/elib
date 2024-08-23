import React from "react";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import Block from "../components/block.jsx";
import Feedback from "../components/feedback.jsx";
import FadeLoader from "react-spinners/FadeLoader";

import "./main_page.css";
import "./page.css";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

import page from "../mobx_components/pages_state.js";

const UsualPage = observer(() => {
  let { key } = useParams();

  useEffect(() => {
    page.update(String(key).substring(1));
  }, [key]);

  if (key === "feedback")
    return (
      <div className="page">
        <Header />
        <main className="main_content">
          <div className="section_name">
            <h2>Информационно библиотечный центр</h2>
            <h1>Обратная связь</h1>
            <div className="line line--black"></div>
          </div>
          <div className="section_column">
            <Feedback />
          </div>
        </main>
        <Footer />
      </div>
    );

  return (
    <div className="page">
      <Header />
      {!page.loaded ? (
        <div className="loader">
          <FadeLoader color="rgb(36, 39, 63)" />
        </div>
      ) : (
        <>
          <main className="main_content">
            <div className="section_name">
              <h2>Информационно библиотечный центр</h2>
              <h1>{page.name}</h1>
              <div className="line line--black"></div>
            </div>
            <div className={page.id == 5 ? "section_grid" : "section_column"}>
              {page.content.map((item) => (
                <Block key={item.id} block={item} />
              ))}
            </div>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
});

export default UsualPage;
