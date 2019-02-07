import React, { Component } from "react";
import BookList from "./BookList";
import Book from "../Components/Book";
import { searchOnChange, itemSearch, getBooks, loggedIn } from "../actions";

import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";
class Home extends Component {
  componentDidMount() {
    //this.props.getUsers();
    this.props.getBooks();
    if (localStorage.getItem("jwt")) {
      this.props.loggedIn();
    }
  }

  searchOnChange = e => {
    this.props.searchOnChange(e.target.value);
    this.props.itemSearch(
      this.props.books.filter(book =>
        book.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  chosenOne = value => {
    console.log(value);
    if (value === "All") {
      this.props.itemSearch(this.props.books);
    } else {
      this.props.itemSearch(
        this.props.books.filter(book =>
          book.subject.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
  };

  render() {
    return (
      <div>
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <input
          type="text"
          placeholder="Search by title"
          value={this.props.search}
          onChange={e => this.searchOnChange(e)}
        />
        <br />
        <select onChange={e => this.chosenOne(e.target.value)}>
          <option>All</option>
          <option>Math</option>
          <option>English</option>
          <option>History</option>
          <option>Art</option>
          <option>Psychology</option>
        </select>
        <Route exact path="/" component={BookList} />
        <Route path="/books/:id" render={props => <Book {...props} />} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books,
  search: state.search
});

export default connect(
  mapStateToProps,
  { searchOnChange, itemSearch, getBooks, loggedIn }
)(Home);
