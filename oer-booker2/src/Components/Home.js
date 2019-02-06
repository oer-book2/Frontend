import React from "react";
import BookList from "./BookList";

const Home = props => {
  const { bookList, getBookById } = props;
  return <BookList bookList={bookList} getBookById={getBookById} />;
};

export default Home;
