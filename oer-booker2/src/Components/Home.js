import React from "react";
import BookList from "./BookList";

const Home = props => {
  console.log(props);
  return (
    <div className="home-page">
      <BookList bookList={props.bookList} />
    </div>
  );
};

export default Home;
