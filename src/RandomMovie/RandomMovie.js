import React, { Component } from "react";
import { Link } from "react-router-dom";
import ApiContext from "../ApiContext";
import Footer from "../Footer/Footer";
import Navbar from "../Nav/Navbar";
import ValidationError from "../ValidationError";
import Movie from "./Movie";

class RandomMovie extends Component {
  state = {
    selectedMovie: [],
    clicked: false,
  };

  static contextType = ApiContext;

  handleRandomClick = (e) => {
    const { savedMovies = [] } = this.context;

    const randomMovie =
      savedMovies[Math.floor(Math.random() * savedMovies.length)];
    this.setState({
      selectedMovie: randomMovie,
      clicked: true,
    });
    console.log(this.state.selectedMovie);
    console.log(savedMovies);
  };
  render() {
    const selectedMovie = this.state.selectedMovie;
    const movies = this.context;
    return (
      <div className="randomMovie">
        <Navbar />
        <header>
          <h2>Randomizer</h2>
        </header>
        <div className="randomMovie results">
          <p>
            Stop faffing about not being able to decide what to watch and let
            Moviedex decide for you! We'll choose one movie from your{" "}
            <Link to="/savedmovies">Saved Movies</Link> and end your
            indecisiveness once and for all!
          </p>

          <button
            className={movies.savedMovies.length > 0 ? "results" : "hidden"}
            type="button"
            onClick={this.handleRandomClick}
          >
            Pls Help!
          </button>
          <ValidationError message={movies.validateSaved} />
          <Movie
            title={selectedMovie.movie_title}
            poster={selectedMovie.movie_poster}
            year={selectedMovie.year_released}
            clicked={this.state.clicked}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default RandomMovie;
