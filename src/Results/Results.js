import React, { Component } from "react";
import ApiContext from "../ApiContext";
import "./Results.css";

class Results extends Component {
  static contextType = ApiContext;
  render() {
    const { movies = [] } = this.context;
    const ohNos = this.context;
    console.log(ohNos);
    return (
      <div>
        <p>{ohNos.errors}</p>

        <section className={movies.length ? "results" : "hidden"}>
          <h3>Results</h3>
          <h5>{ohNos.query}</h5>
          <ul>
            {movies.map((movie, index) => {
              return (
                <li key={index + 1}>
                  <img src={movie.Poster} alt="movie poster unavailable" />
                  <p>
                    {movie.Title} {movie.Year}
                  </p>
                  <button type="button">Save to List</button>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    );
  }
}

export default Results;
