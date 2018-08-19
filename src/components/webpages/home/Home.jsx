import React, { Component } from "react";

import Webpage from "../../webpage/Webpage";
import "./Home.css";

class Home extends Component {
  render() {
    const content = <div className="home">HOME PAGE</div>;

    return <Webpage content={content} />;
  }
}

export default Home;
