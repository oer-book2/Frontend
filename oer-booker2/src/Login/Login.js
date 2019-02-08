import React from "react";

import LoginForm from "./LoginForm";
import SignUpForm from "../SignUp/SignUpForm";
import "./login.css";

class Login extends React.Component {
  state = {
    login: true
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
          <LoginForm
            signUp={this.signUp}
            updateLogin={this.props.updateLogin}
          />
        </div>
      );
    } else {
      return (
        <SignUpForm
          loginMe={this.loginMe}
          updateLogin={this.props.updateLogin}
        />
      );
    }
  }
}

export default Login;
