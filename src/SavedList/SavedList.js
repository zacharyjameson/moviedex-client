import React, { Component } from "react";
import ApiContext from "../ApiContext";
import config from "../config";
import DeleteMovie from "../DeleteMovie/DeleteMovie";
import Navbar from "../Nav/Navbar";
import RandomMovie from "../RandomMovie/RandomMovie";
import "../App.css";

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

    return (
      <div className="App_main">
        <Navbar />
        <section>
          <header>
            <h1>My List</h1>
          </header>
          <button type="button" onClick={this.handleClearList}>
            Clear My List
          </button>
          <ul>
            {savedMovies.map((savedMovie) => {
              return (
                <li key={savedMovie.id} id={savedMovie.id}>
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
