import React from "react";
import { Route } from "react-router-dom";

import LoginForm from "./LoginForm";
import SignUpForm from "../SignUp/SignUpForm";

class Login extends React.Component {
  state = {
    login: true,
  };

  componentDidMount() {
    this.setState({ login: true });
  }

  loginMe = e => {
    this.setState({ login: true });
  };

  signUp = e => {
    this.setState({ login: false });
  };

  render() {
    if (this.state.login) {
      return (
        <div className="login">
          <LoginForm signUp={this.signUp} />
        </div>
      );
    } else {
      return <SignUpForm loginMe={this.loginMe} />;
    }
  }
}

export default Login;
