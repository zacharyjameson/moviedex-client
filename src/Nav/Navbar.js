import { Link } from "react-router-dom";
import React, { Component } from "react";
import ApiContext from "../ApiContext";

class Navbar extends Component {

  static contextType = ApiContext;

  render() {
    const savedMovies = this.context;

    return (
      <nav>
        <Link to="/">Moviedex</Link> | <Link to="/search">Find Movies</Link> |{" "}
        <Link to="/savedmovies">My List ({savedMovies.savedMovies.length})</Link> |{" "}
        <Link to="/randomizer">Randomizer</Link>
      </nav>
    );
  }
}

export default Navbar;
