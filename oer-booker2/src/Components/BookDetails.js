import React from "react";
import { Link } from "react-router-dom";
const BookDetails = props => {
  const { title, id, imageArea } = props.book;
  return (
    <div>
      <img src={imageArea} style={{ width: "25%", marginTop: "2%" }} />
      <Link to={`books/${id}`} className="book">
        <h3 style={{ width: "25%", margin: "2% auto" }}>{title}</h3>
      </Link>
      <p style={{ width: "25%", margin: "2% auto" }}>
        Average rating: {props.book["avg-rating"]}
      </p>
    </div>
  );
};

export default BookDetails;
