import React, { Component } from "react";

import Webpage from "../../webpage/Webpage";
import TripInfoForm from "../../tripInfoForm/TripInfoForm";
import "./Home.css";

class Home extends Component {
  render() {
    const content = (
      <div className="home">
        <TripInfoForm />
      </div>
    );
    console.log(this.props.location.search);

    return <Webpage content={content} />;
  }
}

export default Home;
