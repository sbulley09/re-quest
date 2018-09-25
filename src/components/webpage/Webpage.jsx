import React, { Component } from "react";

import Header from "../header/Header";
import "./Webpage.css";

class Home extends Component {
  render() {
    return (
      <div className="content">
        <div>
          <Header />
          <div className="content-container">{this.props.content}</div>
        </div>
      </div>
    );
  }
}

export default Home;
