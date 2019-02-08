import axios from "axios";

export const USERS_FETCHED = "USERS_FETCHED";
export const FETCHING_USERS = "FETCHING_USERS";
export const FETCHING_BOOKS = "FETCHING_BOOKS";
export const BOOKS_FETCHED = "BOOKS_FETCHED";
export const FETCH_FAILED = "FETCH_FAILED";
export const IS_LOGGED_IN = "IS_LOGGED_IN";
export const USER_SIGNUP = "USER_SIGNUP";
export const SIGNUP_ONCHANGE = "SIGNUP_ONCHANGE";
export const ITEM_SEARCH = "ITEM_SEARCH";
export const SEARCH_ONCHANGE = "SEARCH_ONCHANGE";
export const BOOK_BY_ID = "BOOK_BY_ID";
export const REVIEW_DELETE = "REVIEW_DELETE";
export const POST_REVIEW = "POST_REVIEW";

const userEndpoint = `https://oerbookr2.herokuapp.com/oerbooker/users`;
const booksEndpoint = "https://oerbookr2.herokuapp.com/oerbooker/textbooks";
// const booksByIdEndpoint =
//     'https://oerbookr2.herokuapp.com/oerbooker/textbooks/{textbookId}';
// const logInEndpoint = 'https://oerbookr2.herokuapp.com/oerbooker/login';
const signUpEndpoint = `https://oerbookr2.herokuapp.com/oerbooker/register`;
// const reviewsEndpoint = `https://oerbookr2.herokuapp.com/oerbooker/users/reviews`;

export const getUsers = _ => dispatch => {
  dispatch({ type: FETCHING_USERS });

  axios
    .get(userEndpoint)
    .then(res => dispatch({ type: USERS_FETCHED, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_FAILED, payload: err }));
};

export const getBooks = options => dispatch => {
  dispatch({ type: FETCHING_BOOKS });

  axios
    .get(booksEndpoint, options)
    .then(res => {
      dispatch({ type: BOOKS_FETCHED, payload: res.data });
    })
    .catch(err => dispatch({ type: FETCH_FAILED, payload: err }));
};

export const userSignUp = signUpInfo => dispatch => {
  axios
    .post(signUpEndpoint, signUpInfo)
    .then(res => dispatch({ type: USER_SIGNUP, payload: res.data }))
    .catch(err => console.log(err));
};

export const getBookById = id => dispatch => {
  axios
    .get(`https://oerbookr2.herokuapp.com/oerbooker/textbooks/${id}`)
    .then(res => {
      dispatch({
        type: BOOK_BY_ID,
        payload: res.data.bookdata[0],
        reviews: res.data.reviews
      });
    })
    .catch(err => console.log(err));
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
export const itemSearch = searchItem => {
  return {
    type: ITEM_SEARCH,
    payload: searchItem
  };
};
export const searchOnChange = searchItem => {
  return {
    type: SEARCH_ONCHANGE,
    payload: searchItem
  };
};

export const deleteComment = (id, tid) => dispatch => {
  axios
    .delete(`https://oerbookr2.herokuapp.com/oerbooker/reviews/${id}`)
    .then(res =>
      axios
        .get(`https://oerbookr2.herokuapp.com/oerbooker/textbooks/${tid}`)
        .then(res => {
          dispatch({
            type: BOOK_BY_ID,
            payload: res.data.bookdata[0],
            reviews: res.data.reviews
          });
        })
        .catch(err => console.log(err))
    );
};
export const postReview = (review, id) => dispatch => {
  axios
    .post(
      `https://oerbookr2.herokuapp.com/oerbooker/textbooks/${id}/reviews`,
      review
    )
    .then(res => {
      axios
        .get(`https://oerbookr2.herokuapp.com/oerbooker/textbooks/${id}`)
        .then(res => {
          dispatch({
            type: BOOK_BY_ID,
            payload: res.data.bookdata[0],
            reviews: res.data.reviews
          });
        })
        .catch(err => console.log(err));
    });
};

export const updateReview = (id, review, tid) => dispatch => {
  axios
    .put(`https://oerbookr2.herokuapp.com/oerbooker/reviews/${id}`, review)
    .then(res => {
      axios
        .get(`https://oerbookr2.herokuapp.com/oerbooker/textbooks/${tid}`)
        .then(res => {
          dispatch({
            type: BOOK_BY_ID,
            payload: res.data.bookdata[0],
            reviews: res.data.reviews
          });
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
};
