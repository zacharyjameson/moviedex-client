import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <section className="App_main">
        <header>
          <h1>Moviedex</h1>
        </header>
        <div>
          Tired of not being able to decide on what movie or show to watch next?
          Moviedex lets you scower the internet for your favorite films, save
          them to a list and Moviedex randomly recommends which one you should
          watch next!
        </div>
        <div>
          <p>
            <Link to="/search">Click to Begin</Link> or{" "}
            <Link to="/signup">create an account</Link> to save your list!
          </p>
        </div>
      </section>
    );
  }
}

export default HomePage;
