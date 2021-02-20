import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import debounce from "lodash/debounce";
import "./Search.css";
import searchIcon from "../svg/search-icon.svg";
import { Redirect } from "react-router-dom";

export default function Search({ setPhotos }) {
  const [value, setValue] = useState("");
  const [query, setQuery] = useState("");

  const getPhotos = value => {
    // To get rid of extra spaces
    const trimedValue = value.trim();

    // Checks whether the value is empty or not
    if (trimedValue) {
      console.log("Calling the api...");
      axios
        .get(
          `https://api.unsplash.com/search/photos?page=1&per_page=10&query=${trimedValue}&client_id=${process.env.REACT_APP_CLIENTID}`
        )
        .then(res => {
          setPhotos(res.data.results);
          console.log(res.data.results);
        });
    }
  };

  // https://medium.com/@rajeshnaroth/using-throttle-and-debounce-in-a-react-function-component-5489fc3461b3
  const debouncedGetPhotos = useCallback(
    debounce(value => getPhotos(value), 500),
    []
  );

  const onChange = e => {
    setValue(e.target.value);
    // debouncedGetPhotos(e.target.value);
    // setQuery(e.target.value);
  };

  const handleOnSubmit = e => {
    setQuery(value);
    e.preventDefault();
  };

  // useEffect(() => {
  //   // Set a random nature photo from collections as the background.
  //   const fetchingArandomPhoto = async () => {
  //     const backgroundPhoto = await fetch(
  //       `https://api.unsplash.com/photos/random?orientation=landscape&collections=30098596,8266650,9468595&content_filter=high&client_id=${process.env.REACT_APP_CLIENTID}`
  //     ).then(res => res.json());

  //     const searchContainer = document.querySelector(".search-container");

  //     searchContainer.style.background = `url(${backgroundPhoto.urls.regular})`;
  //     searchContainer.style.backgroundSize = "cover";
  //     searchContainer.style.backgroundPosition = "center";
  //   };

  //   fetchingArandomPhoto();
  // }, []);

  if (query) {
    return <Redirect to={`/search/${value}`} />;
  }

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

          <div className="search-con">
            <img
              src={searchIcon}
              alt="Search Icon SVG"
              className="search-icon"
            />

            <form onSubmit={e => handleOnSubmit(e)}>
              <input
                type="text"
                value={value}
                placeholder="Search"
                onChange={e => onChange(e)}
              />

              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
