import { Link } from "react-router-dom";
import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <Link to="/">Moviedex</Link> | <Link to="/search">Find Movies</Link> |{" "}
        <Link to="/savedmovies">My List</Link> |{" "}
        <Link to="/createaccount">Create Account</Link> |{" "}
        <Link to="/login">Login</Link>
      </nav>
    );
  }
}

export default Navbar;
