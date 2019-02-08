import React from "react";
import { Link } from "react-router-dom";
import "./bookDetails.css";

const BookDetails = props => {
  const { title, id, imageArea } = props.book;
  let rating = Number(props.book["avg_rating"]);
  let stars = [1, 2, 3, 4, 5];
  stars.fill("star", 0, rating);
  return (
    <div className="book-details">
      <img
        className="book-img"
        src={require("../images/defaultImage.png")}
        alt="logo"
      />
      <div className="book-info">
        <Link to={`books/${id}`} className="book">
          <h3>{title}</h3>
        </Link>
        <div className="average">
          Average rating:
          <div>
            {stars.map(star => {
              if (star === "star") {
                return <i className="fas fa-star" />;
              } else {
                return <i className="far fa-star" />;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
