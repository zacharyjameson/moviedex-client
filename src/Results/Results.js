import React, { Component } from "react";
import AddMovie from "../AddMovie/AddMovie";
import ApiContext from "../ApiContext";
import "./Results.css";

class Results extends Component {
  static contextType = ApiContext;

  render() {
    const { movies = [] } = this.context;
    const ohNos = this.context;

    return (
      <div className="results">
        <p>{ohNos.errors}</p>

        <section className={movies.length ? "results" : "hidden"}>
          <div>
            <ul className="container">
              {movies.map((movie, index) => {
                return (
                  <li key={index + 1} id={index + 1} className="item">
                    <AddMovie
                      id={index + 1}
                      movie_title={movie.Title}
                      movie_poster={movie.Poster}
                      year_released={movie.Year}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default Results;
