import React from "react";
import "./Book.css";
import { Button } from "reactstrap";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class Reviews extends React.Component {
  state = {
    editing: false,
    dropdownOpen: false,
    review: {
      comment: "",
      rating: 1,
      name: localStorage.getItem("name")
    }
  };
  deleteC = e => {
    e.preventDefault();
    this.props.deleteComment(this.props.review.id, this.props.tid);
  };

  editMe = e => {
    this.setState({
      editing: true,
      review: {
        comment: this.props.review.comment,
        rating: this.props.review.rating,
        name: localStorage.getItem("name")
      }
    });
  };

  commentAreaOnChange = e => {
    this.setState({
      review: {
        ...this.state.review,
        comment: e.target.value
      }
    });
  };
  ratingOnChange = e => {
    this.setState({
      review: {
        ...this.state.review,
        rating: e.currentTarget.textContent
      }
    });
  };

  postMe = e => {
    this.props.updateReview(
      this.props.review.id,
      this.state.review,
      this.props.tid
    );
    this.setState({ editing: false });
  };

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  };

  render() {
    const { comment, rating } = this.props.review;
    const name = localStorage.getItem("name");

    let stars = [1, 2, 3, 4, 5];
    stars.fill("star", 0, rating);

    if (this.state.editing) {
      return (
        <div className="editing">
          <textarea
            placeholder="Your review here"
            value={this.state.review.comment}
            onChange={this.commentAreaOnChange}
          />
          <Dropdown
            style={{ marginBottom: "2px" }}
            isOpen={this.state.dropdownOpen}
            toggle={this.toggle}
          >
            <DropdownToggle caret>{this.state.review.rating}</DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={this.ratingOnChange}>1</DropdownItem>
              <DropdownItem onClick={this.ratingOnChange}>2</DropdownItem>
              <DropdownItem onClick={this.ratingOnChange}>3</DropdownItem>
              <DropdownItem onClick={this.ratingOnChange}>4</DropdownItem>
              <DropdownItem onClick={this.ratingOnChange}>5</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Button style={{ marginRight: "2px" }} onClick={this.postMe}>
            Submit
          </Button>
          <Button onClick={() => this.setState({ editing: false })}>
            Cancel
          </Button>
        </div>
      );
    } else {
      return (
        <div className="reviews">
          <div>
            {stars.map(star => {
              if (star === "star") {
                return <i className="fas fa-star" />;
              } else {
                return <i className="far fa-star" />;
              }
            })}
          </div>
          <p>{comment}</p>
          {name === this.props.review.name ? (
            <div>
              <Button
                style={{ marginRight: "2px" }}
                color="secondary"
                size="sm"
                onClick={this.deleteC}
              >
                X
              </Button>
              <Button color="secondary" size="sm" onClick={this.editMe}>
                Edit
              </Button>
            </div>
          ) : (
            ""
          )}
        </div>
      );
    }
  }
}

export default Reviews;
