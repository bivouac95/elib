import React from "react";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import Block from "../components/block.jsx";
import Feedback from "../components/feedback.jsx";
import FadeLoader from "react-spinners/FadeLoader";

import "./search_page.css";
import "./page.css";

import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

import search from "../mobx_components/search_state.js";

const SearchPage = observer(() => {
  const [searchParams] = useSearchParams();
  const key = searchParams.get("key");

  useEffect(() => {
    search.update(String(key));
  }, [key]);

  console.log("key " + search.key);
  console.log("content " + search.articles);
  console.log("loaded " + search.loaded);
  return (
    <div className="page page--search">
      <Header />
      {!search.loaded ? (
        <div className="loader">
          <FadeLoader color="rgb(36, 39, 63)" />
        </div>
      ) : (
        <>
          <main className="main_content">
            <div className="section_name">
              <h2>Информационно библиотечный центр</h2>
              <h1>Результаты поиска</h1>
              <div className="line line--black"></div>
            </div>
            <div className="section_column search_section">
              {search.articles
                ? search.articles.map((item) => (
                    <Block key={item.id} block={item} />
                  ))
                : []}
              {search.articles.length == 0 ? <h3>Ничего не найдено</h3> : null}
            </div>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
});

export default SearchPage;
