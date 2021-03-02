import "./App.css";
import React from "react";
import SearchMovies from "./SearchMovies.js";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">The Movie Search</h1>
        <SearchMovies />
      </div>
    );
  }
}

export default App;
