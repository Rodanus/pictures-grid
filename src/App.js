import React from "react";
import "./App.css";
import Search from "./components/Search";
import PhotosList from "./components/PhotosList";

function App() {
  return (
    <div className="App">
      <Search />
      <PhotosList />
    </div>
  );
}

export default App;
