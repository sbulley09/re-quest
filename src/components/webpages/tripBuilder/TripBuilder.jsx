import React, { Component } from "react";

import Webpage from "../../webpage/Webpage";
import "./TripBuilder.css";

class TripBuilder extends Component {
  render() {
    const content = (
      <div className="trip-builder">
        {this.props.location.state.origin +
          " " +
          this.props.location.state.destination}
      </div>
    );

    return <Webpage content={content} />;
  }
}

export default TripBuilder;
