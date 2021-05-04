import React, { Component } from "react";
import ValidationError from "../ValidationError";
import Results from "../Results/Results";
import ApiContext from "../ApiContext";
import Navbar from "../Nav/Navbar";

class Search extends Component {
  static contextType = ApiContext;

  render() {
    const movies = this.context;
    return (
      <div>
        <div className="searchPage">
          <Navbar />
          <section>
            <header>
              <h2>Find Movies</h2>
            </header>
            <p className="subheader">
              Enter a movie title (or as much of it as you can remember) and
              save what you like by hitting the "Save to List" button.
            </p>
            <form onSubmit={movies.handleSubmit}>
              <input
                className="searchAble"
                type="text"
                name="movieSearch"
                id="movieSearch"
                placeholder="The Lord of the Rings"
                onChange={movies.handleMovieQuery}
                required
              /> <br />
              <ValidationError message={movies.validateMovie} />
              <br />
              <input
                className="clickAble"
                type="submit"
                id="inputbutton"
                value="Submit"
              ></input>
            </form>
            <Results />
          </section>
        </div>
      </div>
    );
  }
}

export default Search;
