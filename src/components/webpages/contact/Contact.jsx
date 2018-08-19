import React, { Component } from "react";
import Webpage from "../../webpage/Webpage";

class Contact extends Component {
  render() {
    const content = (
      <div>
        <p>CONTACT PAGE</p>
      </div>
    );

    return <Webpage content={content} />;
  }
}

export default Contact;
