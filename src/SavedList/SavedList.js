import { Route, Link } from "react-router-dom";
import React, { Component } from "react";

class SavedList extends Component {
  state = {};
  render() {
    return (
      <section role="banner">
        <header role="banner">
          <h1>My List</h1>
          <button type="button" onClick="generateRandomMovie()">
            Let Moviedex Decide!
          </button>
          <div>
            <p>Moviedex has chosen...</p>
            <img src="#" alt="movie poster image" />
            <p>The Lord of the Rings: The Fellowship of the Ring</p>
            <p>Nice.</p>
          </div>
        </header>
        <ul>
          <li>
            <img src="#" alt="movie poster image" />
            <p>The Lord of the Rings: The Fellowship of the Ring</p>
            <button type="button" onClick="deleteSavedMovie()">
              Remove
            </button>
          </li>
          <li>
            <img src="#" alt="movie poster image" />
            <p>The Lord of the Rings: The Two Towers</p>
            <button type="button" onClick="deleteSavedMovie()">
              Remove
            </button>
          </li>
          <li>
            <img src="#" alt="movie poster image" />
            <p>The Lord of the Rings: The Return of the King</p>
            <button type="button" onClick="deleteSavedMovie()">
              Remove
            </button>
          </li>
        </ul>
      </section>
    );
  }
}

export default SavedList;
