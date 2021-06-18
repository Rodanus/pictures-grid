import React, { Component } from "react";
import "./Overlay.css";

export default function Overlay({ toggleViewPhoto }) {
  const handleOnClick = () => {
    toggleViewPhoto();
  };

  return <div className="overlay" onClick={handleOnClick}></div>;
}
