import React, { Component } from "react";
import notavailable4 from "../images/notavailable4.jpg";

class Movie extends Component {

  addDefaultSrc(ev) {
    ev.target.src = notavailable4;
  }

  render() {
    const { poster, title, year, clicked } = this.props;
    return (
      <div className={clicked ? "results" : "hidden"}>
        <p>Moviedex has chosen...</p>
        <img src={poster} onError={this.addDefaultSrc} alt="movie poster unavailable" />
        <p>
          {title} - {year}
        </p>
        <p className="nice">Nice.</p>
      </div>
    );
  }
}

export default Movie;
