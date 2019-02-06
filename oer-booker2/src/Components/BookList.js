import React from "react";
import Book from "./Book";

const BookList = props => (
  <div className="book-list">
    {props.bookList.map(book => (
      <Book
        bookTitle={book.title}
        bookRating={book.rating}
        img={book.imageArea}
      />
    ))}
  </div>
);

export default BookList;
