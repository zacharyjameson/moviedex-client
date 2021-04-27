import React, { Component } from "react";
import ApiContext from "../ApiContext";
import "./Results.css";

class Results extends Component {
  static contextType = ApiContext;
  render() {
    const { movies = [] } = this.context;
    return (
      <section className={movies.length > 0 ? "results" : "hidden"}>
        <h3>Results</h3>{console.log(movies)}
        <ul>
          {movies.map((movie) => {
            return <li key={movie.imdbID}>
            <img src={movie.Poster} alt="movie poster unavailable"/>
              <p>
                {movie.Title} {movie.Year}
              </p>
              <button type="button">Save to List</button>
            </li>;
          })}
        </ul>
      </section>
    );
  }
}

export default Results;
