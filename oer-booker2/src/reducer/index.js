import dummyData from '../dummyData';

import {
    FETCHING_USER,
    USERS_FETCHED,
    FETCHING_BOOKS,
    BOOKS_FETCHED,
    FETCH_FAILED,
    USER_LOGIN,
    USER_SIGNUP,
    LOGIN_ONCHANGE,
    SIGNUP_ONCHANGE,
    ITEM_SEARCH,
    SEARCH_ONCHANGE,
    BOOK_BY_ID,
    loggedIn,
    IS_LOGGED_IN,
    REVIEW_DELETE,
    POST_REVIEW,
} from '../actions';

const initialState = {
    users: [],
    books: [],
    displayedBooks: [],
    oneBook: [],
    reviews: [],

    loginInfo: {
        name: '',
        password: '',
    },

    signUpInfo: {
        name: '',
        password: '',
        confirmPassword: '',
    },
    isLoggedIn: false,
    search: '',
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case USERS_FETCHED:
            return {};
        case BOOKS_FETCHED:
            return {
                ...state,
                books: action.payload,
                displayedBooks: action.payload,
            };
        case BOOK_BY_ID:
            console.log(action.payload);
            return {
                ...state,
                oneBook: action.payload,
                reviews: action.reviews,
            };
        case USER_LOGIN:
            return {
                ...state,
                users: action.payload,
            };
        case LOGIN_ONCHANGE:
            return {
                ...state,
                loginInfo: action.payload,
            };
        case SIGNUP_ONCHANGE:
            return {
                ...state,
                signUpInfo: action.payload,
            };
        case ITEM_SEARCH:
            console.log(action.payload);
            return {
                ...state,
                displayedBooks: action.payload,
            };
        case SEARCH_ONCHANGE:
            return {
                ...state,
                search: action.payload,
            };
        case FETCH_FAILED:
            return {};
        case IS_LOGGED_IN:
            return {
                ...state,
                isLoggedIn: action.payload,
            };
        case REVIEW_DELETE:
            return {
                ...state,
                reviews: action.payload,
            };
        case POST_REVIEW:
            return {
                ...state,
                reviews: [...state.reviews, { ...action.payload }],
            };
        default:
            return state;
    }
};
