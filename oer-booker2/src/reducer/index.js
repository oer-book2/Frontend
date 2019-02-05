import {
  FETCHING_USER,
  USER_FETCHED,
  FETCHING_BOOKS,
  BOOKS_FETCHED,
  FETCHING_FAILED,
  USER_LOGIN,
  USER_SIGNUP
} from "../reducer";

const initialState = {
  users: [],
  books: [],

  userLogin: {
    name: "",
    password: ""
  },

  userSignUp: {
    name: "",
    password: "",
    confirmPassword: ""
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_FETCHED:
      return {};
    case BOOKS_FETCHED:
      return {};
    case USER_LOGIN:
      return {};
    case USER_SIGNUP:
      return {};
    case FETCHING_FAILED:
      return {};
    default:
      return state;
  }
};
