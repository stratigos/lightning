import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <span role="img" aria-label="home">⚡🗣</span>
          </Link>
        </li>
        <li>
          <a
            className="App-link"
            href="https://thoughtbot.com/san-francisco"
            target="_blank"
            rel="noopener noreferrer"
          >Visit thoughtbot</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
