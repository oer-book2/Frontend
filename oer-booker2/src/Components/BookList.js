import React from "react";
import { Link } from "react-router-dom";

const BookList = props => (
  <div className="book-list">
    {props.bookList.map(book => (
      <div>
        <Link to={`books/${book.id}`} className="book">
          <img src={book.imageArea} style={{ width: "25%", marginTop: "2%" }} />
        </Link>
        <h3 style={{ width: "25%", margin: "2% auto" }}>{book.title}</h3>
      </div>
    ))}
  </div>
);

export default BookList;
{
  /* <Book
        bookTitle={book.title}
        bookRating={book.rating}
        img={book.imageArea}
      /> */
}
