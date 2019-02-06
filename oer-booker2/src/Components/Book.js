import React from "react";
import { Route } from "react-router-dom";
import axios from "axios";

class Book extends React.Component {
  state = {
    book: null
  };

  componentDidMount() {}

  render() {
    return (
      <Route path="/book/:id" className="book">
        <img src={this.props.img} style={{ width: "25%", marginTop: "2%" }} />
        <h3 style={{ width: "25%", margin: "2% auto" }}>
          {this.props.bookTitle}
        </h3>
      </Route>
    );
  }
}

export default Book;
