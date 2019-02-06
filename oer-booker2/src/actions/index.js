import axios from "axios";

export const FETCHING_USERS = "FETCHING_USERS";
export const USERS_FETCHED = "USERS_FETCHED";
export const FETCHING_BOOKS = "FETCHING_BOOKS";
export const BOOKS_FETCHED = "BOOKS_FETCHED";
export const FETCH_FAILED = "FETCH_FAILED";
export const USER_LOGIN = "USER_LOGIN";
export const LOGIN_ONCHANGE = "LOGIN_ONCHANGE";
export const USER_SIGNUP = "USER_SIGNUP";
export const SIGNUP_ONCHANGE = "SIGNUP_ONCHANGE";

const userEndpoint = `${process.env.REACT_APP_URL}/oerbooker/users`;
const booksEndpoint = `${process.env.REACT_APP_URL}/oerbooker/books`;
const booksByIdEndpoint = `${process.env.REACT_APP_URL}/oerbooker/books/:id`;
const logInEndpoint = "https://oerbookr2.herokuapp.com/oerbooker/login";
const signUpEndpoint = `${process.env.REACT_APP_URL}/oerbooker/users`;
const reviewsEndpoint = `${process.env.REACT_APP_URL}/oerbooker/users/reviews`;

export const getUsers = _ => dispatch => {
  dispatch({ type: FETCHING_USERS });

  axios
    .get(userEndpoint)
    .then(res => dispatch({ type: USERS_FETCHED, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_FAILED, payload: err }));
};

export const getBooks = _ => dispatch => {
  dispatch({ type: FETCHING_BOOKS });

  axios
    .get(booksEndpoint)
    .then(res => dispatch({ type: BOOKS_FETCHED, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_FAILED, payload: err }));
};

export const userSignUp = signUpInfo => dispatch => {
  axios
    .post(signUpEndpoint, signUpInfo)
    .then(res => dispatch({ type: USER_SIGNUP, payload: res.data }))
    .catch(err => console.log(err));
};

export const loginOnChange = loginInfo => {
  return {
    type: LOGIN_ONCHANGE,
    payload: {
      name: loginInfo.name,
      password: loginInfo.password
    }
  };
};
export const signUpOnChange = signUpInfo => {
  return {
    type: SIGNUP_ONCHANGE,
    payload: {
      name: signUpInfo.name,
      password: signUpInfo.password,
      confirmPassword: signUpInfo.confirmPassword
    }
  };
};