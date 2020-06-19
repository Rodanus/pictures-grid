import React, { useState, useCallback } from "react";
import axios from "axios";
import debounce from "lodash/debounce";
import "./Search.css";
import searchIcon from "../svg/search-icon.svg";

export default function Search({ setPhotos }) {
  const [value, setValue] = useState("");

  const getPhotos = value => {
    // To get rid of extra spaces
    const trimedValue = value.trim();

    // Checks whether the value is empty or not
    if (trimedValue) {
      console.log("Calling the api...");
      axios
        .get(
          `https://api.unsplash.com/search/photos?page=1&per_page=4&query=${trimedValue}&client_id=${process.env.REACT_APP_CLIENTID}`
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
    debouncedGetPhotos(e.target.value);
  };

  return (
    <div className="search-con">
      <img src={searchIcon} alt="Search Icon SVG" className="search-icon" />

      <input
        type="text"
        value={value}
        placeholder="Search"
        onChange={e => onChange(e)}
      />
    </div>
  );
}
