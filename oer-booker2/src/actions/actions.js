import axios from "axios";

export const FETCHING_USERS = "FETCHING_USERS";
export const USERS_FETCHED = "USERS_FETCHED";
export const FETCHING_BOOKS = "FETCHING_BOOKS";
export const BOOKS_FETCHED = "BOOKS_FETCHED";
export const FETCH_FAILED = "FETCH_FAILED";
export const USER_LOGIN = "USER_LOGIN";
export const USER_SIGNUP = "USER_SIGNUP";

const userEndpoint = `${process.env.REACT_APP_URL}/oer_booker/users`;
const booksEndpoint = `${process.env.REACT_APP_URL}/oer_booker/books`;
const logInEndpoint = `${process.env.REACT_APP_URL}/oer_booker/login`;
const signUpEndpoint = `${process.env.REACT_APP_URL}/oer_booker/users`;

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

export const userLogIn = loginInfo => dispatch => {
  axios
    .post(logInEndpoint, loginInfo)
    .then(res => dispatch({ type: USER_LOGIN, payload: res.data }))
    .catch(err => console.log(err));
};
export const userSignUp = signUpInfo => dispatch => {
  axios
    .post(signUpEndpoint, signUpInfo)
    .then(res => dispatch({ type: USERS_SIGNUP, payload: res.data }))
    .catch(err => console.log(err));
};
