import React, { useEffect } from "react";
import Search from "./Search";
import "./CTASection.css";

export default function CTASection() {
  //   useEffect(() => {
  //     // Set a random nature photo from collections as the background.
  //     const fetchingArandomPhoto = async () => {
  //       const backgroundPhoto = await fetch(
  //         `https://api.unsplash.com/photos/random?orientation=landscape&collections=30098596,8266650,9468595&content_filter=high&client_id=${process.env.REACT_APP_CLIENTID}`
  //       ).then(res => res.json());

  //       const searchContainer = document.querySelector(".search-container");

  //       searchContainer.style.background = `url(${backgroundPhoto.urls.regular})`;
  //       searchContainer.style.backgroundSize = "cover";
  //       searchContainer.style.backgroundPosition = "center";
  //     };

  //     fetchingArandomPhoto();
  //   }, []);

  return (
    <div className="search-container">
      <div className="search-background-overlay">
        <div className="search-section">
          <div className="app-info">
            <h1 className="project-name">Photozia</h1>
            <p className="project-description">
              Search and get high quality images! Using the{" "}
              <a
                className="project-desc-link"
                href="https://unsplash.com/developers"
                target="_blank"
              >
                Unsplash API
              </a>
            </p>
          </div>

          <Search />
        </div>
      </div>
    </div>
  );
}
