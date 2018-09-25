import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import "./TripInfoForm.css";

class TripInfoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      origin: "",
      destination: "",
      formErrors: [],
      validated: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateInputs = this.validateInputs.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const errors = this.validateInputs();

    this.setState({
      formErrors: errors,
      validated: errors.length === 0
    });
  }

  validateInputs() {
    const formErrors = [];
    if (!this.state.origin) {
      formErrors.push("*You must provide a starting location.");
    }

    if (!this.state.destination) {
      formErrors.push("*You must provide a final location.");
    }

    return formErrors;
  }

  render() {
    const errorMessages = [];

    if (this.state.validated) {
      return (
        <Redirect
          to={{
            pathname: "/trip-builder",
            state: {
              origin: this.state.origin,
              destination: this.state.destination
            }
          }}
        />
      );
    } else {
      this.state.formErrors.forEach(reason => {
        errorMessages.push(<div className="errors">{reason}</div>);
      });
    }

    return (
      <section className="trip-info-section">
        <form className="trip-info-content" onSubmit={this.handleSubmit}>
          <div className="trip-info-header">Re-Quest a better way.</div>
          <div className="trip-info-row">
            <input
              name={"origin"}
              placeholder="*Origin"
              value={this.state.origin}
              onChange={this.handleInputChange}
            />
            <input
              name={"destination"}
              placeholder="*Destination"
              value={this.state.destination}
              onChange={this.handleInputChange}
            />
          </div>
          <div>{errorMessages}</div>
          <div className="submit">
            <input type="submit" value="Re-Quest" />
          </div>
        </form>
      </section>
    );
  }
}

export default TripInfoForm;
