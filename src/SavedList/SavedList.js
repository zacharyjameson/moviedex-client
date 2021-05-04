import React, { Component } from "react";
import ApiContext from "../ApiContext";
import config from "../config";
import DeleteMovie from "../DeleteMovie/DeleteMovie";
import Navbar from "../Nav/Navbar";
import "../App.css";
import ValidationError from "../ValidationError";

class SavedList extends Component {
  static defaultProps = {
    selectedMovie: [],
  };
  static contextType = ApiContext;

  handleClearList = (e) => {
    e.preventDefault();

    const requestOptions = {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    };

    fetch(`${config.MOVIE_DATABASE_URL}/movies`, requestOptions)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Whoopsie! Please try that again.");
        }
      })
      .then(() => {
        this.context.fetchData();
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  render() {
    const { savedMovies = [] } = this.context;
    const movies = this.context;

    return (
      <div className="results">
        <Navbar />
        <section className="results">
          <header>
            <h2>My List</h2>
          </header>
          <p className="subheader">Find all of your saved movies here. Click the remove button to delete movies from your list that you've finally gotten around to watching, or maybe just lost interst in entirely</p>
          <ValidationError message={movies.validateSaved} />
          <input value="Clear My List" className={movies.savedMovies.length > 0 ? "clickAble" : "hidden"} type="button" onClick={this.handleClearList} />
          <ul className="container">
            {savedMovies.map((savedMovie) => {
              return (
                <li className="item" key={savedMovie.id} id={savedMovie.id}>
                  <DeleteMovie
                    id={savedMovie.id}
                    movie_title={savedMovie.movie_title}
                    movie_poster={savedMovie.movie_poster}
                    year_released={savedMovie.year_released}
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

export default SavedList;
