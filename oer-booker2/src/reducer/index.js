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
  SEARCH_ONCHANGE
} from "../actions";

const initialState = {
  users: [],
  books: dummyData,
  displayedBooks: dummyData,

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
  console.log(action.type);
  switch (action.type) {
    case USERS_FETCHED:
      return {};
    case BOOKS_FETCHED:
      return {};
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
