import React, { Component } from "react";
import ApiContext from "../ApiContext";
import config from "../config";

class AddMovie extends Component {
  static defaultProps = {
    onAddMovie: () => {},
  };

  static contextType = ApiContext;

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
    return (
      <div id={id}>
        <img src={movie_poster} />
        <p>
          {movie_title} - {year_released}
        </p>
        <button type="button" onClick={this.handleClickAdd}>Save to List</button>
      </div>
    );
  }
}

export default AddMovie;
