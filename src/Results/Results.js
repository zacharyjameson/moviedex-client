import React, { Component } from "react";
import AddMovie from "../AddMovie/AddMovie";
import ApiContext from "../ApiContext";
import Footer from "../Footer/Footer";
import "./Results.css";

class Results extends Component {
  static contextType = ApiContext;

  render() {
    const { movies = [] } = this.context;
    const ohNos = this.context;
    
    console.log("searchedResults:", movies);
    return (
      <div>
        <p>{ohNos.errors}</p>

        <section className={movies.length ? "results" : "hidden"}>
          <h3>Results for...<br/>{ohNos.query.toUpperCase()}</h3>
          <ul>
            {movies.map((movie, index) => {
              return (
                <li key={index + 1} id={index + 1}>
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
        </section>
      </div>
    );
  }
}

export default Results;
