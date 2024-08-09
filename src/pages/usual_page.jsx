import React from "react";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import Block from "../components/block.jsx";
import FadeLoader from "react-spinners/FadeLoader";

import "./main_page.css";
import "./page.css";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";

import page from "../mobx_components/pages_state.js";

const UsualPage = observer(() => {
  let { key } = useParams();
  useEffect(() => {
    page.update(String(key).substring(1));
  }, []);

  return (
    <div className="page">
      <Header />
      {!page.loaded ? (
        <div className="loader">
          <FadeLoader color="rgb(36, 39, 63)"/>
        </div>
      ) : (
        <>
          <main className="main_content">
            <h2>Информационно библиотечный центр</h2>
            <h1>{page.name}</h1>
            <div className="section_name">
              <div className="line"></div>
            </div>
            {page.content.map((item) => (
              <Block key={item.id} block={item} />
            ))}
          </main>
          <Footer />
        </>
      )}
    </div>
  );
});

export default UsualPage;
