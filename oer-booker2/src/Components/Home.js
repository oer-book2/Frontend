import React from "react";
import BookList from "./BookList";

const Home = props => {
  const { bookList } = props;
  return <BookList bookList={bookList} />;
};

export default Home;
