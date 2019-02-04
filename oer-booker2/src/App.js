import React, { Component } from "react";
import "./App.css";

import Login from "./Login/Login";
import authentication from "./Authentication/authentication";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage />
      </div>
    );
  }
}

export default authentication(App)(Login);
