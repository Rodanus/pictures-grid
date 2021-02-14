import React, { useState, useEffect } from "react";
import "./App.css";
import Search from "./components/Search";
import PhotosList from "./components/PhotosList";

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchingData = async () => {
      const randomPics = await fetch(
        `https://api.unsplash.com/photos/random?count=30&client_id=${process.env.REACT_APP_CLIENTID}`
      ).then(res => res.json());
      setPhotos(randomPics);
    };
    fetchingData();
  }, []);

  return (
    <div className="App">
      <Search setPhotos={setPhotos} />
      <PhotosList photos={photos} />
    </div>
  );
}

export default App;
