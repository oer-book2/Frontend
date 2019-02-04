import React from "react";

const BookList = props => (
  <div className="book-list">
    {props.bookList.map(book => {
      <Book bookTitle={book.title} bookRating={book.rating} />;
    })}
  </div>
);

export default BookList;
