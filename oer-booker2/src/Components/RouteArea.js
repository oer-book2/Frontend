import React, { Component } from 'react';
import Home from './Home';
import { Route } from 'react-router-dom';
import BookList from './BookList';
import Book from './Book';

class RouteArea extends Component {
    render() {
        return (
            <div>
                <Home />
                <Route
                    exact
                    path="/"
                    render={props => (
                        <BookList
                            {...props}
                            pdateLogin={this.props.updateLogin}
                        />
                    )}
                />
                <Route path="/books/:id" component={Book} />
            </div>
        );
    }
}

export default RouteArea;
