import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Results from "../Results/Results";

class Search extends Component {
  state = {};
  render() {
    return (
      <div className="App_main">
        <nav>
          <Link to="/">Moviedex</Link> | <Link to="/search">Find Movies</Link>
        </nav>
        <section>
          <header>
            <h2>Find a Movie</h2>
          </header>
          <label for="movieSearch">Search: </label>
          <input
            type="text"
            id="movieSearch"
            placeholder="The Lord of the Rings"
          />
          <button type="submit">submit</button>
          <Results />
        </section>
      </div>
    );
  }
}

export default Search;
