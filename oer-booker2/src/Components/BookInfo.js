import React from "react";

class BookInfo extends React.Component {
  state = {
    review: {
      comment: "",
      rating: null
    }
  };

  commentAreaOnChange = e => {
    this.setState({
      comment: e.target.value
    });
  };
  ratingOnChange = e => {
    this.setState({
      rating: e.target.value
    });
  };

  render() {
    const {
      title,
      author,
      subject,
      description,
      id,
      rating,
      state,
      ratingOnChange,
      commentAreaOnChange
    } = this.props;
    return (
      <div>
        <img src="" style={{ width: "25%", marginTop: "2%" }} />
        <h3 style={{ width: "25%", margin: "2% auto" }}>{title}</h3>
        <p style={{ width: "25%", margin: "2% auto" }}>{author}</p>
        <p style={{ width: "25%", margin: "2% auto" }}>{subject}</p>
        <p style={{ width: "25%", margin: "2% auto" }}>{description}</p>
        <p style={{ width: "25%", margin: "2% auto" }}>
          Average rating: {rating}
        </p>

        <textarea onChange={e => this.commentAreaOnChange(e)} />
        <select onChange={e => this.ratingOnChange(e)}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <input type="button" onClick={() => this.props.postReview(state, id)} />
      </div>
    );
  }
}

export default BookInfo;
