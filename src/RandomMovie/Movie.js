import React, { Component } from "react";

class Movie extends Component {
  render() {
    const { poster, title, year, clicked } = this.props;
    return (
      <div className={clicked ? "results" : "hidden"}>
        <p>Moviedex has chosen...</p>
        <img src={poster} />
        <p>{title} - {year}</p>
        <p className="nice">Nice.</p>
      </div>
    );
  }
}

export default Movie;
