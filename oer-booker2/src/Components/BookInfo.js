import React from 'react';

class BookInfo extends React.Component {
    render() {
        const { title, author, subject, description } = this.props.book;
        return (
            <div>
                <img src="" style={{ width: '25%', marginTop: '2%' }} />
                <h3 style={{ width: '25%', margin: '2% auto' }}>{title}</h3>
                <p style={{ width: '25%', margin: '2% auto' }}>{author}</p>
                <p style={{ width: '25%', margin: '2% auto' }}>{subject}</p>
                <p style={{ width: '25%', margin: '2% auto' }}>{description}</p>
                <p style={{ width: '25%', margin: '2% auto' }}>
                    Average rating: {this.props.book['avg-rating']}
                </p>
            </div>
        );
    }
}

export default BookInfo;
