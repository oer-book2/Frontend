import React from 'react';
import { connect } from 'react-redux';
import BookDetails from './BookDetails';

import { getBookById } from '../actions';

class BookList extends React.Component {
    render() {
        return (
            <div className="book-list">
                {this.props.displayedBooks.map(book => {
                    return <BookDetails key={book.id} book={book} />;
                })}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { displayedBooks: state.displayedBooks };
};

export default connect(
    mapStateToProps,
    {}
)(BookList);
