import React, { Component } from "react";
import "./App.css";

import Login from "./Login/Login";
import authentication from "./Authentication/authentication";
import axios from "axios";
import Home from "./Components/Home";

class App extends Component {
  state = {
    bookList: []
  };

  componentDidMount() {
    const endpoint = `${process.env.REACT_APP_URL}oer_booker/books`;

    axios.get(endpoint).then(res =>
      this.setState({
        bookList: res.data
      })
    );
  }

  render() {
    return (
      <div className="App">
        <h1>Home</h1>
        <Home bookList={this.state.bookList} />
      </div>
    );
  }
}

export default authentication(App)(Login);
