import React, { Component } from "react";
import ApiContext from "../ApiContext";
import config from "../config";
import notavailable4 from "../images/notavailable4.jpg";

class AddMovie extends Component {
  static defaultProps = {
    onAddMovie: () => {},
  };

  static contextType = ApiContext;

  addDefaultSrc(ev) {
    ev.target.src = notavailable4;
  }

  handleClickAdd = (e) => {
    e.preventDefault();
    const { movie_poster, movie_title, year_released } = this.props;

    const requestOptions = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        movie_title: `${movie_title}`,
        movie_poster: `${movie_poster}`,
        year_released: `${year_released}`,
      }),
    };

    fetch(`${config.MOVIE_DATABASE_URL}/movies`, requestOptions)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Whoopsie! Please try again later.");
        }
        return res.json();
      })
      .then(() => {
          this.context.fetchData()
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  render() {
    const { movie_poster, movie_title, year_released, id } = this.props;
    const brokenImage = notavailable4;
    const poster = movie_poster;
    let usedPoster;

    if (!movie_poster) {
      usedPoster = brokenImage;
    } else {
      usedPoster = poster;
    }
    

    return (
      <div id={id}>
        <img src={usedPoster} onError={this.addDefaultSrc} alt="movie poster" />
        <p>
          {movie_title} - {year_released}
        </p>
        <button type="button" onClick={this.handleClickAdd}>Save to List</button>
      </div>
    );
  }
}

export default AddMovie;
