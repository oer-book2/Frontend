import React from "react";

const Home = props => {
  return (
    <div className="home-page">
      <BookList bookList={props.bookList} />
    </div>
  );
};

export default Home;
