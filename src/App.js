import React, { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import PhotosList from "./components/PhotosList";

function App() {
  const [photos, setPhotos] = useState([]);

  return (
    <div className="App">
      <Search setPhotos={setPhotos} />
      <PhotosList photos={photos} />
    </div>
  );
}

export default App;
