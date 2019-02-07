import React from "react";

const Reviews = props => {
  const { id, comment, rating, deleteComment } = props;
  console.log(deleteComment);
  // const deleteComment = _ => {
  //   axios
  //     .delete(`https://oerbookr2.herokuapp.com/oerbooker/reviews/${id}`)
  //     .then(res => console.log(res));
  // };

  return (
    <div>
      <p>{comment}</p>
      <p>{rating}</p>

      <input type="button" value="X" onClick={() => props.deleteComment(id)} />
    </div>
  );
};

export default Reviews;
