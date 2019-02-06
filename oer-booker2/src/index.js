import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router, withRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { reducer } from "./reducer";

const store = createStore(reducer, applyMiddleware(thunk, logger));
const AppWithRouter = withRouter(App);
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppWithRouter />
    </Router>
  </Provider>,
  document.getElementById("root")
);
