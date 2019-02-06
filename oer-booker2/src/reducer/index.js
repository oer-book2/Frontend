import dummyData from "../dummyData";

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
  BOOK_BY_ID
} from "../actions";

const initialState = {
  users: [],
  books: [],
  displayedBooks: [],

  loginInfo: {
    name: "",
    password: ""
  },

  signUpInfo: {
    name: "",
    password: "",
    confirmPassword: ""
  },
  isLoggedIn: true,
  search: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_FETCHED:
      return {};
    case BOOKS_FETCHED:
      return {
        ...state,
        books: action.payload,
        displayedBooks: action.payload
      };
    case BOOK_BY_ID:
      console.log(action.payload);
      return {
        ...state,
        displayedBooks: action.payload
      };
    case USER_LOGIN:
      return {
        ...state,
        users: action.payload
      };
    case LOGIN_ONCHANGE:
      return {
        ...state,
        loginInfo: action.payload
      };
    case SIGNUP_ONCHANGE:
      return {
        ...state,
        signUpInfo: action.payload
      };
    case ITEM_SEARCH:
      return {
        ...state,
        displayedBooks: action.payload
      };
    case SEARCH_ONCHANGE:
      return {
        ...state,
        search: action.payload
      };
    case FETCH_FAILED:
      return {};
    default:
      return state;
  }
};
