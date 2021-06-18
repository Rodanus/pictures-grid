import React, { Fragment, useEffect, useRef, useState } from "react";
import Overlay from "./Overlay";
import externalLinkIcon from "../svg/external-link.svg";
import "./PhotoModel.css";

export default function PhotoModel({ viewPhoto, toggleViewPhoto }) {
  const { user, urls, links } = viewPhoto;

  useEffect(() => {
    document.addEventListener("keydown", e => {
      if (e.key === `Escape`) {
        toggleViewPhoto(viewPhoto);
      }
    });
  }, []);

  const handleOnClick = e => {
    const photo = e.target;
    photo.classList.toggle("full-width");
  };

  return (
    <Fragment>
      {viewPhoto.viewPhoto && (
        <Fragment>
          <Overlay toggleViewPhoto={toggleViewPhoto} />
          <div className="view-photo-model">
            <div className="photo-details">
              <div className="user-info">
                <img
                  src={user.profile_image.medium}
                  alt=""
                  className="user-personal-pic"
                />
                <div className="user-name">
                  <h4 className="full-name">{user.name}</h4>
                  <h5 className="username">@{user.username}</h5>
                </div>
              </div>
              <a href={links.html} target="_blank" className="external-link">
                <img src={externalLinkIcon} alt="external link icon" />
              </a>
            </div>
            <div className="photo">
              <img
                src={urls.regular}
                alt=""
                className="clicked-photo"
                onClick={handleOnClick}
              />
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}
