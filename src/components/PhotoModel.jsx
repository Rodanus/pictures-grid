import React, { Fragment } from "react";
import Overlay from "./Overlay";
import externalLinkIcon from "../svg/external-link.svg";
import "./PhotoModel.css";

export default function PhotoModel({ viewPhoto }) {
  const { user, urls, links } = viewPhoto;

  const handleOnClick = e => e.target.classList.toggle("full-width");

  return (
    <Fragment>
      {viewPhoto.viewPhoto && (
        <Fragment>
          <Overlay />
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
