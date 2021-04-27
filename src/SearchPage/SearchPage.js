import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import ValidationError from "../ValidationError";
import Results from "../Results/Results";

class Search extends Component {
  state = {
    query: "",
  };

  handleMovieClick = (e) => {
    this.setState({
      query: e.target.value,
    });
    console.log(e.target.value);
  };

  validateMovie() {
    const validMovie = this.state.query.trim();
    if (validMovie.length === 0) {
      return "Please enter a movie";
    }
  }

  render() {
    return (
      <div className="App_main">
        <nav>
          <Link to="/">Moviedex</Link> | <Link to="/search">Find Movies</Link> |{" "}
          <Link to="/savedmovies">My List</Link>
        </nav>
        <section>
          <header>
            <h2>Find a Movie</h2>
          </header>
          <label htmlFor="movieSearch">Search: </label>
          <input
            type="text"
            id="movieSearch"
            placeholder="The Lord of the Rings"
            onChange={this.handleMovieClick}
            required
          />
          <ValidationError message={this.validateMovie} />
          <button type="submit">submit</button>
          <Results />
        </section>
      </div>
    );
  }
}

export default Search;
