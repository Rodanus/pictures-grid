import React, { useEffect, useState } from "react";
import PhotosList from "./PhotosList";
import Search from "./Search";
import "./SearchResults.css";
import { useLocation } from "react-router-dom";

export default function SearchResults(props) {
  const [photos, setPhotos] = useState([]);
  const currentLocation = useLocation();

  // Update whenever the url changes.
  useEffect(() => {
    const fetchingData = async () => {
      const searchResults = await fetch(
        `https://api.unsplash.com/search/photos?page=1&per_page=30&query=${props.match.params.query}&client_id=${process.env.REACT_APP_CLIENTID}`
      )
        .then(res => res.json())
        .then(res => setPhotos(res.results));
    };
    fetchingData();
  }, [currentLocation]);

  return (
    <div className="search-results-container">
      <Search history={props.history} />
      <section className="search-results">
        <PhotosList photos={photos} title={`Your Search Results:`} />
      </section>
    </div>
  );
}
