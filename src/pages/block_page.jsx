import React from "react";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import FadeLoader from "react-spinners/FadeLoader";
import Slider from 'react-slick';

import "./block_page.css";
import "../components/block.css";
import "./page.css";
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";


import block from "../mobx_components/block_state.js";

function format(string) {
  const date = new Date(string);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("ru", options);
}

const BlockPage = observer(() => {
  let { id } = useParams();
  const navigate = useNavigate();
  let blockData = <></>;
  useEffect(() => {
    block.update(String(id).substring(1));
  }, [id]);
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  if (block.loaded) {
    {
      switch (block.page) {
        case 1:
        case 3:
          blockData = (
            <div className="block--article">
              <Slider {...settings}>
                {block.images ? block.images.map((image, i) => (
                  <div className="large_image" key={"large_image" + i}>
                  <img
                    src={image}
                    alt=""
                    className="large_image__image"
                    key={"image" + i}
                  />
                  <img
                    src={image}
                    alt=""
                    className="large_image__backgroung"
                    key={"image__backgroung" + i}
                  />
                </div>
                )) : []}
              </Slider>
              {block.content.split("\n").map((p, i) => (
                <p className="block__text" key={i}>{p}</p>
              ))}
            </div>
          );
          break;

        case 5:
          blockData = (
            <div className="block--image">
              <p className="ui">{format(block.date)}</p>
              <div className="large_image">
                <img
                  src={block.content}
                  alt=""
                  className="large_image__image"
                />
                <img
                  src={block.content}
                  alt=""
                  className="large_image__backgroung"
                />
              </div>
            </div>
          );
          break;
      }
    }
  }

  return (
    <div className="page">
      <Header />
      {!block.loaded ? (
        <div className="loader">
          <FadeLoader color="rgb(36, 39, 63)" />
        </div>
      ) : (
        <>
          <main className="main_content">
            <h2>{block.headling}</h2>
            <div className="line line--black"></div>
            {blockData}
            <div className="ui block__return">
              Вернуться назад
              <button className="ui_button" onClick={() => navigate(-1)}>
                <img src="../page/go_back.svg" alt="" />
              </button>
            </div>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
});

export default BlockPage;
