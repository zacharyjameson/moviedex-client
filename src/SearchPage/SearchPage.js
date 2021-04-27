import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import ValidationError from "../ValidationError";
import Results from "../Results/Results";
import config from "../config";
import ApiContext from "../ApiContext";

class Search extends Component {
  state = {
    query: "",
  };

  handleMovieQuery = (e) => {
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

  handleSubmit = (e) => {
    e.preventDefault();
    const query = this.state.query;
    const url = `${config.MOVIE_API_URL}${config.MOVIE_API_KEY}&s=${query}&plot=short&type=movie`;

    fetch(url)
      .then((movie) => {
        console.log(url);
        if (!movie.ok) {
          throw new Error("Could not retrieve movies. Please try again later.");
        }
        return movie.json();
      })
      .then((movieJson) => {
        this.setState({
          movies: movieJson.Search,
        });
        console.log(this.state.movies)
      });
  };

  render() {
    const value = {
      movies: this.state.movies,
      query: this.state.query,
    };
    return (
      <ApiContext.Provider value={value}>
        <div className="App_main">
          <nav>
            <Link to="/">Moviedex</Link> | <Link to="/search">Find Movies</Link>{" "}
            | <Link to="/savedmovies">My List</Link>
          </nav>
          <section>
            <header>
              <h2>Find a Movie</h2>
            </header>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="movieSearch">Search: </label>
              <input
                type="text"
                name="movieSearch"
                id="movieSearch"
                placeholder="The Lord of the Rings"
                onChange={this.handleMovieQuery}
                required
              />
              <input type="submit" id="inputbutton" value="Submit"></input>
              <ValidationError message={this.validateMovie()} />
            </form>
            <Results />
          </section>
        </div>
      </ApiContext.Provider>
    );
  }
}

export default Search;
