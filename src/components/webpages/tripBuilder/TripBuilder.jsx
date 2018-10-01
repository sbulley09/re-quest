import React, { Component } from "react";

import Webpage from "../../webpage/Webpage";
import { MyMapComponent } from "../../map/Map";
import "./TripBuilder.css";

const axios = require("axios");

class TripBuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      originAddress: this.props.location.state.origin,
      originResponse: undefined,
      destination: this.props.location.state.destination
    };
  }

  componentDidMount() {
    axios
      .get("https://maps.googleapis.com/maps/api/geocode/json", {
        params: {
          address: this.state.originAddress,
          key: "AIzaSyDg7m2WmdP4yxNFh6NR5weXkk-P91xpmOE"
        }
      })
      .catch(function(error) {
        console.log(error);
      })
      .then(response => {
        console.log(response);
        this.setState({ originResponse: response });
      });
  }

  render() {
    const content = (
      <div className="trip-builder">
        <MyMapComponent
          isMarkerShown
          origin={this.state.originResponse}
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDg7m2WmdP4yxNFh6NR5weXkk-P91xpmOE&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `600px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );

    if (this.state.originResponse) return <Webpage content={content} />;
    return <div>HALLO</div>;
  }
}

export default TripBuilder;
