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
        this.context.fetchData();
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  render() {
    const { movie_poster, movie_title, year_released, id } = this.props;

    return (
      <div id={id}>
        <div className="overlayContainer">
          <img
            src={movie_poster}
            onError={this.addDefaultSrc}
            alt="movie poster"
          />
          <input
            className="save clickAble"
            type="button"
            onClick={this.handleClickAdd}
            value="Save to List"
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

export default AddMovie;
