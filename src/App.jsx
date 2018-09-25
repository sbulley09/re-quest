import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/webpages/home/Home";
import TripBuilder from "./components/webpages/tripBuilder/TripBuilder";
import About from "./components/webpages/about/About";
import Contact from "./components/webpages/contact/Contact";
import SignUp from "./components/webpages/signup/SignUp";
import Login from "./components/webpages/login/Login";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/trip-builder" component={TripBuilder} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
