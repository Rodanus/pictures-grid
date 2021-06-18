import React, { Component } from "react";
import "./Overlay.css";
import closeIcon from "../svg/close-icon.svg";

export default function Overlay({ toggleViewPhoto }) {
  const handleOnClick = () => {
    toggleViewPhoto();
  };

  return (
    <div className="overlay" onClick={handleOnClick}>
      <button className="close-button" title="Close">
        <img src={closeIcon} alt="Close icon" className="close-icon" />
      </button>
    </div>
  );
}
