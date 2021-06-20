import React, { useState, useEffect } from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import Search from "./components/Search";
import PhotosList from "./components/PhotosList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchResults from "./components/SearchResults";
import Note from "./components/Note";

function App() {
  const [displayNote, setDisplayNote] = useState(true);

  return (
    <Router>
      <div className="App">
        {displayNote ? <Note setDisplayNote={setDisplayNote} /> : null}
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/search/:query" component={SearchResults} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
