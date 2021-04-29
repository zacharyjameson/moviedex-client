import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import CreateAccount from "./Accounts/CreateAccount";
import HomePage from "./HomePage/HomePage";
import SavedList from "./SavedList/SavedList";
import Search from "./SearchPage/SearchPage";
import LogInOut from "./Accounts/LogInOut";
import ApiContext from "./ApiContext";
import config from "./config";

class App extends Component {
  state = {
    query: "",
    movies: [],
    errors: "",
    savedMovies: [],
  };

  componentDidMount() {
    this.fetchAllData();
  }

  fetchAllData = () => {
    Promise.all([this.fetchSavedMovies()]).then(([savedMovies]) => {
      this.setState({
        savedMovies,
      });
      console.log(this.state.savedMovies)
    });
  };

  fetchSavedMovies = () => {
    return fetch(`${config.MOVIE_DATABASE_URL}/movies`).then((res) =>
      res.json()
    );
  };

  handleDeleteMovie = (movieId) => {
    this.setState({
      savedMovies: this.state.savedMovies.filter((movie) => movie.id !== movieId)
    })
  }

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
        console.log(this.state.movies);
        console.log(this.state.errors);
      });
  };

  renderMainRoutes() {
    return (
      <>
        <Route exact path="/" component={HomePage} />
        <Route path="/search" component={Search} />
        <Route path="/savedmovies" component={SavedList} />
        <Route path="/createaccount" component={CreateAccount} />
        <Route path="/login" component={LogInOut} />
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
      savedMovies: this.state.savedMovies,
      deleteMovie: this.handleDeleteMovie,
      fetchData: this.fetchAllData
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
