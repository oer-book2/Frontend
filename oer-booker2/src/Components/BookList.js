import React from "react";
import { Link } from "react-router-dom";

const BookList = props => (
  <div className="book-list">
    {props.bookList.map(book => (
      <div key={book.id}>
        <Link
          to={`books/${book.id}`}
          className="book"
          onClick={_ => props.getBookById(book.id)}
        >
          <img src={book.imageArea} style={{ width: "25%", marginTop: "2%" }} />
          <h3 style={{ width: "25%", margin: "2% auto" }}>{book.title}</h3>
        </Link>
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
