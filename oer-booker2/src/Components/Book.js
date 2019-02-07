import React from 'react';
import { getBookById, deleteComment, postReview } from '../actions';
import { connect } from 'react-redux';
import BookInfo from './BookInfo';
import Reviews from './Reviews';

class Book extends React.Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.fetchBook(id);
    }

    fetchBook = id => {
        this.props.getBookById(id);
    };

    render() {
        return (
            <div>
                {this.props.displayedBooks.map(book => {
                    return (
                        <div>
                            <BookInfo
                                key={book.id}
                                id={book.id}
                                title={book.title}
                                state={this.state}
                                author={book.author}
                                subject={book.subject}
                                rating={book['avg-rating']}
                                description={book.description}
                                postReview={this.props.postReview}
                                ratingOnChange={this.ratingOnChange}
                                commentAreaOnChange={this.commentAreaOnChange}
                            />
                        </div>
                    );
                })}
                {this.props.reviews.map(review => {
                    return (
                        <div>
                            <Reviews
                                deleteComment={this.props.deleteComment}
                                key={review.id}
                                comment={review.comment}
                                id={review.id}
                                rating={review.rating}
                            />
                        </div>
                    );
                })}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    displayedBooks: state.displayedBooks,
    reviews: state.reviews,
});

export default connect(
    mapStateToProps,
    { getBookById, deleteComment, postReview }
)(Book);

// export default Book;
