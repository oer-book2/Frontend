import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import authentication from "./Authentication/authentication";
import Login from "./Login/Login";
import Home from "./Components/Home";
import {
  getUsers,
  getBooks,
  loginOnChange,
  signUpOnChange,
  itemSearch,
  searchOnChange,
  getBookById
} from "./actions";

import "./App.css";

class App extends Component {
  componentDidMount() {
    //Fetches data from backend to set to state
    // this.props.getUsers();
    this.props.getBooks();
  }

  searchOnChange = e => {
    this.props.searchOnChange(e.target.value);
    this.props.itemSearch(
      this.props.books.filter(book =>
        book.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  chosenOne = e => {
    if (e.target.value === "All") {
      this.props.itemSearch(this.props.books);
    } else {
      this.props.itemSearch(
        this.props.books.filter(book =>
          book.subject.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    }
  };

  render() {
    if (this.props.isLoggedIn) {
      return (
        <div className="App">
          <h1>Home</h1>
          <input
            type="text"
            placeholder="Search by title"
            value={this.props.search}
            onChange={e => this.searchOnChange(e)}
          />
          <br />
          <select onChange={e => this.chosenOne(e)}>
            <option>All</option>
            <option>Math</option>
            <option>English</option>
            <option>History</option>
            <option>Art</option>
            <option>Psychology</option>
          </select>
          <Home
            bookList={this.props.displayedBooks}
            getBookById={this.props.getBookById}
          />
        </div>
      );
    } else {
      return (
        <Login
          loginInfo={this.props.loginInfo}
          loginOnChange={this.props.loginOnChange}
          userLogIn={this.props.userLogIn}
          signUpInfo={this.props.signUpInfo}
          signUpOnChange={this.props.signUpOnChange}
        />
      );
    }
  }
}

const mapStateToProps = state => ({
  users: state.users,
  books: state.books,
  displayedBooks: state.displayedBooks,
  loginInfo: state.loginInfo,
  signUpInfo: state.signUpInfo,
  isLoggedIn: state.isLoggedIn,
  search: state.search
});

export default connect(
  mapStateToProps,
  {
    getUsers,
    getBooks,
    loginOnChange,
    signUpOnChange,
    itemSearch,
    searchOnChange,
    getBookById
  }
)(App);

// export default authentication(App)(Login);

// export default App;
