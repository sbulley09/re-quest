import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <section className="main-nav">
        <ul>
          <li>
            <Link to="/">Re-Quest</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </section>
    );
  }
}
