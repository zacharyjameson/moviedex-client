import React, { Component } from "react";
import ValidationError from "../ValidationError";
import Results from "../Results/Results";
import ApiContext from "../ApiContext";
import Navbar from "../Nav/Navbar";

class Search extends Component {
static contextType = ApiContext;

  render() {
    const movies = this.context;
    return (
        <div className="App_main">
          <Navbar />
          <section>
            <header>
              <h2>Find a Movie</h2>
            </header>
            <form onSubmit={movies.handleSubmit}>
              <label htmlFor="movieSearch">Search: </label>
              <input
                type="text"
                name="movieSearch"
                id="movieSearch"
                placeholder="The Lord of the Rings"
                onChange={movies.handleMovieQuery}
                required
              />
              <input type="submit" id="inputbutton" value="Submit"></input>
              <ValidationError message={movies.validateMovie} />
            </form>
            <Results />
          </section>
        </div>
    );
  }
}

export default Search;
