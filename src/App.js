import React, { Component } from "react";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery";
import "popper.js";

import "./App.css";
import Router from "./components/Router";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router />
      </div>
    );
  }
}
