import React from "react";
import {
  getBookById,
  deleteComment,
  postReview,
  updateReview
} from "../actions";
import { connect } from "react-redux";
import BookInfo from "./BookInfo";
import Reviews from "./Reviews";
import "./Book.css";
import {
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class Book extends React.Component {
  state = {
    review: {
      comment: "",
      rating: 1,
      name: localStorage.getItem("name")
    },
    dropdownOpen: false
  };

  componentDidMount() {
    this.fetchBook();
  }

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

  fetchBook = () => {
    const { id } = this.props.match.params;
    this.props.getBookById(id);
  };

  postMe = e => {
    e.preventDefault();
    this.props.postReview(this.state.review, this.props.book.id);
    this.setState({ review: { ...this.state.review, comment: "", rating: 1 } });
  };

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  };

  render() {
    const book = this.props.book;
    return (
      <div>
        <BookInfo
          key={book.id}
          book={book}
          postReview={this.props.postReview}
          ratingOnChange={this.ratingOnChange}
          commentAreaOnChange={this.commentAreaOnChange}
          history={this.props.history}
        />

        {this.props.reviews.map(review => {
          return (
            <div key={review.id}>
              <Reviews
                deleteComment={this.props.deleteComment}
                review={review}
                updateReview={this.props.updateReview}
                history={this.props.history}
                tid={review.textbook_id}
              />
            </div>
          );
        })}
        <div className="addComm">
          <textarea
            value={this.state.review.comment}
            onChange={this.commentAreaOnChange}
          />
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>{this.state.review.rating}</DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={this.ratingOnChange}>1</DropdownItem>
              <DropdownItem onClick={this.ratingOnChange}>2</DropdownItem>
              <DropdownItem onClick={this.ratingOnChange}>3</DropdownItem>
              <DropdownItem onClick={this.ratingOnChange}>4</DropdownItem>
              <DropdownItem onClick={this.ratingOnChange}>5</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Button style={{ marginTop: "2px" }} onClick={this.postMe}>
            Add Comment
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  book: state.oneBook,
  reviews: state.reviews
});

export default connect(
  mapStateToProps,
  { getBookById, deleteComment, postReview, updateReview }
)(Book);

// export default Book;
