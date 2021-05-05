import ReactDOM from "react-dom"; 
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import DeleteMovie from './DeleteMovie';

test("DeleteMovie renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <DeleteMovie />
    </Router>,
    div
  );
});