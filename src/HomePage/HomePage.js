import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import moviedex from "../images/moviedex.png";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <section className="App_main">
        <header>
        <img id="moviedexLogo" src={moviedex} alt="moviedex" />
        </header>
        <div>
          Tired of not being able to decide on what movie or show to watch next?
          Moviedex lets you scower the internet for your favorite films, save
          them to a list and Moviedex randomly recommends which one you should
          watch next!
        </div>
        <br />
        <div>
          <p>
            <Link className="clickAble" to="/search">Click to Begin!</Link>
          </p>
        </div>
      </section>
    );
  }
}

export default HomePage;
