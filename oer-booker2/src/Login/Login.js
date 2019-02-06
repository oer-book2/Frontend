import React from "react";
import { Route } from "react-router-dom";

// import { userLogin, userSingUp } from "../actions";
import LoginForm from "./LoginForm";
import SignUpForm from "../SignUp/SignUpForm";

const Login = props => (
  <div className="login">
    <LoginForm
      signUpInfo={props.signUpInfo}
      loginInfo={props.loginInfo}
      loginOnChange={props.loginOnChange}
      userLogIn={props.userLogIn}
    />
    <SignUpForm
      signUpInfo={props.signUpInfo}
      signUpOnChange={props.signUpOnChange}
    />
  </div>
);

export default Login;
