import { Link } from "react-router-dom";
import React, { Component } from "react";
import ApiContext from "../ApiContext";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moviedex from "../images/moviedex.png";

class Navbar extends Component {
  static contextType = ApiContext;

  render() {
    const savedMovies = this.context;

    return (
      <nav className="navContainer">
        <div className="navItem">
          <Link to="/"><img id="moviedexLogo" src={moviedex} alt="moviedex" /></Link>
        </div>
        <div className="middle">
          <p>
          <Link to="/search">Find Movies</Link> |{" "}
          <Link to="/mylist">My List ({savedMovies.savedMovies.length})</Link> |{" "}
          <Link to="/randomizer">Randomizer</Link>
          </p>
        </div>
        <div className="navItem workLinks">
          <a
            href="https://github.com/zacharyjameson"
            target="_blank"
            rel="noreferrer"
            alt="github link"
          >
            <FontAwesomeIcon icon={faGithubSquare} className="github" />
          </a>{" "}
          <a
            href="https://www.linkedin.com/in/zacharyjameson/"
            target="_blank"
            rel="noreferrer"
            alt="linkedin link"
          >
            <FontAwesomeIcon icon={faLinkedin} className="linked-in" />
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
