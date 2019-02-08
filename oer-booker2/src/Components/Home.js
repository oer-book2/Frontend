import React, { Component } from "react";
import { searchOnChange, itemSearch, getBooks } from "../actions";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./home.css";

class Home extends Component {
  state = {
    dropdownOpen: false
  };

  toggle = e => {
    e.preventDefault();
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  };

  componentDidMount() {
    this.fetchBooks();
  }

  fetchBooks = () => {
    let options = {};
    if (localStorage.getItem("jwt")) {
      options = {
        headers: {
          Authorization: localStorage.getItem("jwt")
        }
      };
    }
    this.props.getBooks(options);
  };

  componentDidUpdate(prevProps) {
    if (this.props.books.length === 0) {
      localStorage.removeItem("jwt");
      this.props.updateLogin();
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

  select = e => {
    this.chosenOne(e.currentTarget.textContent);
  };

  logOut = e => {
    localStorage.removeItem("jwt");
    this.props.updateLogin();
  };

  render() {
    return (
      <div className="search-div">
        <Link to="/" onClick={this.fetchBooks}>
          <h1 className="home">Home</h1>
        </Link>
        <div className="mobile">
          <input
            className="search-title"
            type="text"
            placeholder="&#xF002;Search by title"
            value={this.props.search}
            onChange={e => this.searchOnChange(e)}
          />

          <Dropdown
            className="dropdown"
            isOpen={this.state.dropdownOpen}
            toggle={this.toggle}
          >
            <DropdownToggle caret>Subjects</DropdownToggle>
            <DropdownMenu>
              <DropdownItem header />
              <DropdownItem onClick={this.select}>All</DropdownItem>
              <DropdownItem onClick={this.select}>English</DropdownItem>
              <DropdownItem onClick={this.select}>History</DropdownItem>
              <DropdownItem onClick={this.select}>Math</DropdownItem>
              <DropdownItem onClick={this.select}>Art</DropdownItem>
              <DropdownItem onClick={this.select}>Psychology</DropdownItem>
              <DropdownItem onClick={this.select}>Science</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>

        <div className="exit-div">
          <i className="exit fab fa-angellist fa-3x" onClick={this.logOut} />
          <small>Log out</small>
        </div>
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
  { searchOnChange, itemSearch, getBooks }
)(Home);
