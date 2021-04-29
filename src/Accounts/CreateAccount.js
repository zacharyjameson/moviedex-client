import React, { Component } from "react";
import Navbar from "../Nav/Navbar";

class CreateAccount extends Component {
  render() {
    return (
      <section>
          <header>
              <h2>Create Account</h2>
            </header>
        <Navbar />
        <form>
          <div>
            <label htmlFor="username">Username</label>
            <input
              placeholder="username"
              type="text"
              name="username"
              id="username"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              placeholder="bobross@hotmail.com"
              type="text"
              name="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              placeholder="I've got the same combination on my luggage!"
              type="password"
              name="password"
              id="password"
            />
          </div>
          <input type="submit" value="submit" />
        </form>
      </section>
    );
  }
}

export default CreateAccount;
