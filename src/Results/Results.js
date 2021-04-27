import React, { Component } from "react";
import "./Results.css";

class Results extends Component {
  state = {};
  render() {
    return (
      <section>
        <h3>Results</h3>
        <ul>
          <li>
            <img src="#" alt="movie poster image" />
            <p>The Lord of the Rings: The Fellowship of the Ring</p>
            <button type="button" /*onClick="addToList()"*/>
              Save to List
            </button>
            <button type="button" /*onClick="deleteSavedMovie()"*/>
              Remove
            </button>
          </li>
          <li>
            <img src="#" alt="movie poster image" />
            <p>The Lord of the Rings: The Two Towers</p>
            <button type="button" /*onClick="addToList()"*/>
              Save to List
            </button>
            <button type="button" /*onClick="deleteSavedMovie()"*/>
              Remove
            </button>
          </li>
          <li>
            <img src="#" alt="movie poster image" />
            <p>The Lord of the Rings: The Return of the King</p>
            <button type="button" /*onClick="addToList()"*/>
              Save to List
            </button>
            <button type="button" /*onClick="deleteSavedMovie()"*/>
              Remove
            </button>
          </li>
        </ul>
      </section>
    );
  }
}

export default Results;
