import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import debounce from "lodash/debounce";
import "./Search.css";
import searchIcon from "../svg/search-icon.svg";
import { Redirect, useLocation } from "react-router-dom";

export default function Search(props) {
  const [value, setValue] = useState("");
  const [query, setQuery] = useState("");
  const currentLocation = useLocation();
  const isResultsPage = currentLocation.pathname.includes("search");

  const removeWhitespace = value => value.trim();

  const updateURL = () => {
    // To get rid of extra spaces
    const valueWithoutWhitespace = removeWhitespace(value);

    // Checks whether the value is empty or not
    if (valueWithoutWhitespace) {
      props.history.push(`/search/${value}`);
    }
  };

  const onChange = e => {
    setValue(e.target.value);
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    if (removeWhitespace(value)) {
      setQuery(value);

      if (isResultsPage) {
        updateURL();
      }
    }
  };

  // If user is on home page redirect to results page
  if (!isResultsPage && query) {
    return <Redirect to={`/search/${value}`} />;
  }

  return (
    <div className="search-con">
      <form onSubmit={e => handleOnSubmit(e)}>
        <button className="search-button">
          <img src={searchIcon} alt="Search Icon SVG" className="search-icon" />
        </button>
        <input
          type="text"
          value={value}
          placeholder="Search"
          onChange={e => onChange(e)}
        />
      </form>
    </div>
  );
}
