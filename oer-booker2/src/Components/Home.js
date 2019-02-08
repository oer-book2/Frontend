import React, { Component } from 'react';
import { searchOnChange, itemSearch, getBooks } from '../actions';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

import { connect } from 'react-redux';
import { Route, Link, Switch } from 'react-router-dom';
import './home.css';

class Home extends Component {
    state = {
        dropdownOpen: false,
    };

    toggle = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen,
        }));
    };

    componentDidMount() {
        //this.props.getUsers();
        let options = {};
        if (localStorage.getItem('jwt')) {
            options = {
                headers: {
                    Authorization: localStorage.getItem('jwt'),
                },
            };
        } else {
            return;
        }
        this.props.getBooks(options);
    }

    componentDidUpdate(prevProps) {
        if (this.props.books.length === 0) {
            localStorage.removeItem('jwt');
            this.props.updateLogin();
        }
    }

    searchOnChange = e => {
        this.props.searchOnChange(e.target.value);
        this.props.itemSearch(
            this.props.books.filter(book =>
                book.title.toLowerCase().includes(e.target.value.toLowerCase())
            )
        );
    };

    chosenOne = value => {
        console.log(value);
        if (value === 'All') {
            this.props.itemSearch(this.props.books);
        } else {
            this.props.itemSearch(
                this.props.books.filter(book =>
                    book.subject.toLowerCase().includes(value.toLowerCase())
                )
            );
        }
    };

    render() {
        return (
            <div className="search-div">
                <Link to="/">
                    <h1>Home</h1>
                </Link>
                <input
                    className="search-title"
                    type="text"
                    placeholder="Search by title"
                    value={this.props.search}
                    onChange={e => this.searchOnChange(e)}
                />

                <br />
                <Dropdown
                    isOpen={this.state.dropdownOpen}
                    toggle={this.toggle}
                    onChange={e => this.chosenOne(e.target.value)}
                >
                    <DropdownToggle caret>Subjects</DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header />
                        <DropdownItem>All</DropdownItem>
                        <DropdownItem disabled>English</DropdownItem>
                        <DropdownItem>History</DropdownItem>
                        <DropdownItem>Art</DropdownItem>
                        <DropdownItem>Psychology</DropdownItem>
                        <DropdownItem>Science</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    books: state.books,
    search: state.search,
});

export default connect(
    mapStateToProps,
    { searchOnChange, itemSearch, getBooks }
)(Home);
