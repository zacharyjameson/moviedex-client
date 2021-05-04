import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <a href="https://github.com/zacharyjameson" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithubSquare} className="github" />
        </a>{" "}
        <a href="https://www.linkedin.com/in/zacharyjameson/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="linked-in" />
        </a>
      </footer>
    );
  }
}

export default Footer;
