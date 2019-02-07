import React, { Component } from "react";
import { Route } from "react-router-dom";
import authentication from "./Authentication/authentication";
import Login from "./Login/Login";
import Home from "./Components/Home";

import "./App.css";

class App extends Component {
  render() {
    return <Home />;
  }
}

export default authentication(App)(Login);
