import React, { useState, useEffect } from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import Search from "./components/Search";
import PhotosList from "./components/PhotosList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchResults from "./components/SearchResults";

function App() {
  const [photos, setPhotos] = useState([]);

  // useEffect(() => {
  //   const fetchingData = async () => {
  //     const randomPics = await fetch(
  //       `https://api.unsplash.com/photos/random?count=30&client_id=${process.env.REACT_APP_CLIENTID}`
  //     ).then(res => res.json());
  //     setPhotos(randomPics);
  //   };
  //   fetchingData();
  // }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Homepage />
            <PhotosList photos={photos} title="For You To Check:" />
          </Route>
          <Route path="/search/:query" component={SearchResults} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
