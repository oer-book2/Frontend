import React from "react";
import { Route } from "react-router-dom";

import LoginForm from "./LoginForm";
import SignUpForm from "../SignUp/SignUpForm";

const Login = _ => (
  <div className="login">
    <Route exact path="/login" render={props => <LoginForm {...props} />} />
    <Route path="/login/sign-up" component={SignUpForm} />
  </div>
);

export default Login;
