import React, { useEffect, useState } from "react";
import PhotosList from "./PhotosList";

export default function SearchResults({ match }) {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchingData = async () => {
      const searchResults = await fetch(
        `https://api.unsplash.com/search/photos?page=1&per_page=30&query=${match.params.query}&client_id=${process.env.REACT_APP_CLIENTID}`
      ).then(res => res.json());
      setPhotos(searchResults.results);
    };
    fetchingData();
  }, []);

  return (
    <section className="search-results">
      {match.params.query}:
      <PhotosList photos={photos} />
    </section>
  );
}
