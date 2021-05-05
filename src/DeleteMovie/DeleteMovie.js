import React, { Component } from "react";
import ApiContext from "../ApiContext";
import config from "../config";
import notavailable4 from "../images/notavailable4.jpg";

class DeleteMovie extends Component {
  static defaultProps = {
    onDeleteMovie: () => {},
  };

  static contextType = ApiContext;

  //ADDS DEFAULT IMAGE WHEN MOVIE POSTER IS NOT AVAILABLE
  addDefaultSrc(ev) {
    ev.target.src = notavailable4;
  }

  //PSQL DB CALL TO DELETE INDIVIDUAL MOVIE
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
        <div className="overlayContainer">
          <img
            src={movie_poster}
            onError={this.addDefaultSrc}
            alt="movie poster unavailable"
          />
          <input
            className="save clickAble"
            value="Remove"
            type="button"
            onClick={this.handleClickRemove}
          />
          <div className="movieBorder">
            <div>{movie_title}</div>
            <div className="nice">{year_released}</div>
          </div>
        </div>

        <br />
      </div>
    );
  }
}

export default DeleteMovie;
