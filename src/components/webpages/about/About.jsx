import React, { Component } from "react";
import Webpage from "../../webpage/Webpage";

class About extends Component {
  render() {
    const content = (
      <div>
        <p>ABOUT PAGE</p>
      </div>
    );

    return <Webpage content={content} />;
  }
}

export default About;
