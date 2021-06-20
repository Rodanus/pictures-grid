import React from "react";
import "./Note.css";
import closeIcon from "../svg/close-icon.svg";

export default function Note({ setDisplayNote }) {
  const handleOnClick = () => setDisplayNote(false);

  return (
    <div className="note">
      <p className="note-text">
        Please note that I'm still building this project. This is not the final
        design and functionality.
      </p>
      <div className="close-icon-note">
        <img src={closeIcon} alt="Close icon" onClick={handleOnClick} />
      </div>
    </div>
  );
}
