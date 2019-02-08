import React, { Component } from "react";
import Home from "./Home";
import { Route } from "react-router-dom";
import BookList from "./BookList";
import Book from "./Book";

class RouteArea extends Component {
  render() {
    return (
      <div>
        <Home updateLogin={this.props.updateLogin} />
        <Route exact path="/" render={props => <BookList {...props} />} />
        <Route path="/books/:id" component={Book} />
      </div>
    );
  }
}

export default RouteArea;
