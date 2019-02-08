import React from 'react';
import {
    getBookById,
    deleteComment,
    postReview,
    updateReview,
} from '../actions';
import { connect } from 'react-redux';
import BookInfo from './BookInfo';
import Reviews from './Reviews';

class Book extends React.Component {
    state = {
        comment: '',
        rating: 1,
    };

    componentDidMount() {
        this.fetchBook();
    }

    commentAreaOnChange = e => {
        this.setState({
            comment: e.target.value,
        });
    };
    ratingOnChange = e => {
        this.setState({
            rating: e.target.value,
        });
    };

    fetchBook = () => {
        const { id } = this.props.match.params;
        this.props.getBookById(id);
    };

    postMe = e => {
        e.preventDefault();
        this.props.postReview(this.state, this.props.book.id);
        this.fetchBook();
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
                <textarea onChange={e => this.commentAreaOnChange(e)} />
                <select onChange={e => this.ratingOnChange(e)}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <input
                    type="button"
                    onClick={this.postMe}
                    value="Add Comment"
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    book: state.oneBook,
    reviews: state.reviews,
});

export default connect(
    mapStateToProps,
    { getBookById, deleteComment, postReview, updateReview }
)(Book);

// export default Book;
