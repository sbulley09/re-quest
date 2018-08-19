import React, { Component } from "react";
import Webpage from "../../webpage/Webpage";

class Login extends Component {
  render() {
    const content = (
      <div>
        <p>LOGIN PAGE</p>
      </div>
    );

    return <Webpage content={content} />;
  }
}

export default Login;
