import React from "react";

const Book = props => (
  <div className="book">
    <img src={props.img} style={{ width: "25%", marginTop: "2%" }} />
    <h3 style={{ width: "25%", margin: "2% auto" }}>{props.bookTitle}</h3>
  </div>
);

export default Book;
