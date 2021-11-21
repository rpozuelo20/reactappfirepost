// IMPORTANTE, estoy usando la version @5.3.0 de "react-router-dom", en las nuevas versiones el Router tiene una sintaxis distinta
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}
