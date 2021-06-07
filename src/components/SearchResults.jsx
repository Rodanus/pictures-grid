import React, { useEffect, useState } from "react";
import PhotosList from "./PhotosList";
import Search from "./Search";
import "./SearchResults.css";
import { Link, useLocation } from "react-router-dom";

export default function SearchResults(props) {
  const [photos, setPhotos] = useState([]);
  const [result, setResult] = useState({
    foundResults: false,
    wordSearchedFor: ""
  });
  const currentLocation = useLocation();

  // Update whenever the url changes.
  useEffect(() => {
    const fetchingData = async () => {
      const searchResults = await fetch(
        `https://api.unsplash.com/search/photos?page=1&per_page=30&query=${props.match.params.query}&client_id=${process.env.REACT_APP_CLIENTID}`
      )
        .then(res => res.json())
        .then(res => {
          const results = res.results;

          if (results.length > 0) {
            setResult({ foundResults: true });
            return setPhotos(results);
          }

          // when no results found for the searched word
          setResult({ foundResults: false, word: props.match.params.query });
        });
    };
    fetchingData();
  }, [currentLocation]);

  return (
    <div className="search-results-container">
      <Link to="/" className="home-link">
        Home
      </Link>
      <Search history={props.history} />
      <section className="search-results">
        {result.foundResults ? (
          <PhotosList photos={photos} title={`Your Search Results:`} />
        ) : (
          <h2 className="no-results-found-text">
            No Results Found For: {result.word}
          </h2>
        )}
      </section>
    </div>
  );
}
