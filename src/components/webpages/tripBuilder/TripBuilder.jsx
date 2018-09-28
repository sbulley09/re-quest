import React, { Component } from "react";

import Webpage from "../../webpage/Webpage";
import { MyMapComponent } from "../../map/Map";
import "./TripBuilder.css";

const axios = require("axios");

class TripBuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      origin: this.props.origin,
      destination: this.props.destination,
      originLat: undefined,
      originLng: undefined
    };
  }

  componentDidMount() {
    axios
      .get("https://maps.googleapis.com/maps/api/geocode/json", {
        params: {
          address: this.state.origin,
          key: "AIzaSyDg7m2WmdP4yxNFh6NR5weXkk-P91xpmOE"
        }
      })
      .catch(function(error) {
        console.log(error);
      })
      .then(function(response) {
        const origin = response.data.results[0].geometry.location;
        this.setState({
          originLat: origin.lat,
          originLng: origin.lng
        });
      });
  }

  render() {
    const content = (
      <div className="trip-builder">
        <MyMapComponent
          isMarkerShown
          origin={{ lat: this.state.originLat, lng: this.state.originLng }}
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDg7m2WmdP4yxNFh6NR5weXkk-P91xpmOE&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );

    return <Webpage content={content} />;
  }
}

export default TripBuilder;
