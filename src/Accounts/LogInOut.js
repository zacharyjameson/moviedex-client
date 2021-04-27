import React, { Component } from "react";
import { Link } from "react-router-dom";

class LogInOut extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav>
          <Link to="/">Moviedex</Link> | <Link to="/search">Find Movies</Link> |{" "}
          <Link to="/savedmovies">My List</Link> |{" "}
          <Link to="/createaccount">Create Account</Link> | <Link to="/login">Login</Link>
        </nav>
      </div>
    );
  }
}

export default LogInOut;
