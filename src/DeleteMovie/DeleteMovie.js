import React, { Component } from "react";
import ApiContext from "../ApiContext";
import config from "../config";

class DeleteMovie extends Component {
  static defaultProps = {
    onDeleteMovie: () => {},
  };

  static contextType = ApiContext;

  handleClickRemove = (e) => {
    e.preventDefault();
    const movieId = this.props.id;

    fetch(`${config.MOVIE_DATABASE_URL}/movies/${Number(movieId)}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 204) return res;
      })
      .then(() => {
          this.props.onDeleteMovie(movieId);
          this.context.deleteMovie(movieId);
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  render() {
    const { movie_title, movie_poster, year_released, id } = this.props;
    return (
      <div id={id}>
        <img src={movie_poster} />
        <p>
          {movie_title} {year_released}
        </p>
        <button type="button" onClick={this.handleClickRemove}>Remove From List</button>
      </div>
    );
  }
}

export default DeleteMovie;
