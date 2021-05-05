import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage/HomePage";
import SavedList from "./SavedList/SavedList";
import Search from "./SearchPage/SearchPage";
import ApiContext from "./ApiContext";
import config from "./config";
import RandomMovie from "./RandomMovie/RandomMovie";

class App extends Component {
  state = {
    query: "",
    movies: [],
    errors: "",
    savedMovies: [],
  };

  //FETCHES ALL EXISTING DATA ON MOUNT
  componentDidMount() {
    this.fetchAllData();
  }

  fetchAllData = () => {
    Promise.all([this.fetchSavedMovies()]).then(([savedMovies]) => {
      this.setState({
        savedMovies,
      });
    });
  };

  //CALLS PSQL DB FOR LIST OF SAVEDMOVIE DATA
  fetchSavedMovies = () => {
    return fetch(`${config.MOVIE_DATABASE_URL}/movies`).then((res) =>
      res.json()
    );
  };

  handleDeleteMovie = (movieId) => {
    this.setState({
      savedMovies: this.state.savedMovies.filter(
        (movie) => movie.id !== movieId
      ),
    });
  };

  //CATCHES QUERY TERM INPUT
  handleMovieQuery = (e) => {
    this.setState({
      query: e.target.value,
    });
  };

  //VALIDATION FOR VALID SEARCH INPUT TO OMDb API
  validateMovie() {
    const validMovie = this.state.query.trim();
    if (validMovie.length === 0) {
      return "Please enter a movie";
    }
  }

  //VALIDATION FOR SAVED MOVIE LIST IN PSQL DB 
  validateSavedMovies() {
    const savedMovies = this.state.savedMovies;
    if (savedMovies.length === 0) {
      return "You need to go save some movies first!";
    }
  }
//API REQUEST FOR OMDb API
  handleSubmit = (e) => {
    e.preventDefault();
    const query = this.state.query;
    const url = `${config.MOVIE_API_URL}${config.MOVIE_API_KEY}&s=${query}&plot=short&type=movie`;

    fetch(url)
      .then((movie) => {
        if (!movie.status === 200) {
          throw new Error("Could not retrieve movies. Please try again later.");
        }
        return movie.json();
      })
      .then((movieJson) => {
        this.setState({
          movies: movieJson.Search,
          errors: movieJson.Error,
        });
      });
  };
  //RENDER METHODS FOR INDIVIDUAL COMPONENTS
  renderMainRoutes() {
    return (
      <>
        <Route exact path="/" component={HomePage} />
        <Route path="/search" component={Search} />
        <Route path="/mylist" component={SavedList} />
        <Route path="/randomizer" component={RandomMovie} />
      </>
    );
  }

  render() {
    const value = {
      movies: this.state.movies,
      query: this.state.query,
      errors: this.state.errors,
      handleSubmit: this.handleSubmit,
      handleMovieQuery: this.handleMovieQuery,
      validateMovie: this.validateMovie(),
      validateSaved: this.validateSavedMovies(),
      savedMovies: this.state.savedMovies,
      deleteMovie: this.handleDeleteMovie,
      fetchData: this.fetchAllData,
    };
    return (
      <ApiContext.Provider value={value}>
        <div className="App_main">
          <main className="App_main">{this.renderMainRoutes()}</main>
        </div>
      </ApiContext.Provider>
    );
  }
}

export default App;
