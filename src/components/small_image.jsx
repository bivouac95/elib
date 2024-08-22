import React from "react";
import ReactDOM from "react-dom/client";
import "./small_image.css";

const Block = ({link}) => {

    return (
      <div className="small_image">
        <img className="small_image__image" src={link} alt=""/>
        <img className="small_image__background" src={link} alt=""/>
      </div>
      
    );
  };
  
  export default Block;