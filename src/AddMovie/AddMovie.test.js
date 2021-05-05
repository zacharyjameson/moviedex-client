import ReactDOM from "react-dom"; 
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import AddMovie from './AddMovie';

test("AddMovie renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <AddMovie />
    </Router>,
    div
  );
});