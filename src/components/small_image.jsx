import React from "react";
import ReactDOM from "react-dom/client";
import "./small_image.css";

const Block = ({link}) => {

    return (
      <img className="small_image" src={link} alt=""/>
    );
  };
  
  export default Block;