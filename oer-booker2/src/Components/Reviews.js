import React from 'react';

class Reviews extends React.Component {
    state = {
        editing: false,
        review: {
            comment: '',
            rating: 1,
        },
    };
    deleteC = e => {
        e.preventDefault();
        this.props.deleteComment(this.props.review.id);
    };

    editMe = e => {
        this.setState({ editing: true });
    };

    commentAreaOnChange = e => {
        this.setState({
            review: {
                ...this.state.review,
                comment: e.target.value,
            },
        });
    };
    ratingOnChange = e => {
        this.setState({
            review: {
                ...this.state.review,
                rating: e.target.value,
            },
        });
    };

    postMe = e => {
        this.props.updateReview(this.props.review.id, this.state.review);
    };

    render() {
        const { comment, rating } = this.props.review;

        if (this.state.editing) {
            return (
                <div>
                    <textarea onChange={e => this.commentAreaOnChange(e)} />
                    <select onChange={e => this.ratingOnChange(e)}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    <input type="button" onClick={this.postMe} value="Submit" />
                    <input
                        type="button"
                        onClick={() => this.setState({ editing: false })}
                        value="Cancel"
                    />
                </div>
            );
        } else {
            return (
                <div>
                    <p>{comment}</p>
                    <p>{rating}</p>

                    <input type="button" value="X" onClick={this.deleteC} />
                    <input type="button" onClick={this.editMe} value="Edit" />
                </div>
            );
        }
    }
}

export default Reviews;
