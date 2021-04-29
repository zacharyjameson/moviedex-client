import React, { Component } from "react";
import ApiContext from "../ApiContext";
import Movie from "../Movie/Movie";
import Navbar from "../Nav/Navbar";

class SavedList extends Component {

  static contextType = ApiContext;



  render() {
    const { savedMovies = [] } = this.context;
    const deleteMovie = this.context;
    return (
      <div className="App_main">
        <Navbar />
        <section>
          <header>
            <h1>My List</h1>
            <button type="button">Let Moviedex Decide!</button>
            <div>
              <p>Moviedex has chosen...</p>
              <img src="#" alt="" />
              <p>The Lord of the Rings: The Fellowship of the Ring</p>
              <p>Nice.</p>
            </div>
          </header>
          <ul>
              {savedMovies.map((savedMovie) => {
                return (
                  <li key={savedMovie.id} id={savedMovie.id}>
                    <Movie id={savedMovie.id} movie_title={savedMovie.movie_title} movie_poster={savedMovie.movie_poster} year_released={savedMovie.year_released}/>
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
