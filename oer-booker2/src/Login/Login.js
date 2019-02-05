import React from "react";
import { Route } from "react-router-dom";

import LoginForm from "./LoginForm";
import SignUpForm from "../SignUp/SignUpForm";

const Login = () => (
  <div className="login">
    <LoginForm />
    <Route path="/sign-up" component={SignUpForm} />
  </div>
);

export default Login;
