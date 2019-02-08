import React from "react";
import "./Book.css";

class BookInfo extends React.Component {
  stars = () => {
    let rating = this.props.book["avg_rating"];
    for (let i = 0; i < rating; i++) {
      return;
    }
  };

  render() {
    const {
      title,
      author,
      subject,
      description,
      imageArea,
      link
    } = this.props.book;
    let rating = Number(this.props.book["avg_rating"]);
    let stars = [1, 2, 3, 4, 5];
    stars.fill("star", 0, rating);
    let newSubject = "";
    if (subject) {
      newSubject = subject[0].toUpperCase() + subject.slice(1);
    }
    return (
      <div className="bookInfo">
        <img src={require("../images/defaultImage.png")} alt="book" />
        <div>
          <h3>{title}</h3>
          <p>Author: {author}</p>
          <p>Subject: {newSubject}</p>
          <a href={link} target="_blank" rel="noopener noreferrer">
            Link to textbook
          </a>
          <p>{description}</p>
          <p>
            Average rating:
            {stars.map(star => {
              if (star === "star") {
                return <i className="fas fa-star" />;
              } else {
                return <i className="far fa-star" />;
              }
            })}
          </p>
        </div>
      </div>
    );
  }
}

export default BookInfo;
