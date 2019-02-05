import React from "react";
import axios from "axios";

class LoginForm extends React.Component {
  state = {
    loginInfo: {
      name: "",
      password: ""
    }
  };

  onChange = e => {
    this.setState({
      loginInfo: {
        ...this.state.loginInfo,
        [e.target.name]: e.target.value
      }
    });
  };

  logIn = e => {
    e.preventDefault();
    const loginInfo = this.state.loginInfo;
    const endpoint = `https://oerbookr2.herokuapp.com/oerbooker/login`;

    axios
      .post(endpoint, loginInfo)
      .then(res => localStorage.setItem("jwt", res.data.token))
      .catch(err => alert("Username / password mismatched", err));
  };

  render() {
    return (
      <form className="login-form" onSubmit={this.logIn}>
        <input
          type="text"
          name="name"
          value={this.state.loginInfo.name}
          onChange={this.onChange}
        />
        <input
          type="password"
          name="password"
          value={this.state.loginInfo.password}
          onChange={this.onChange}
        />
        <button type="submit">Login</button>

        <div className="other-options">
          <small>
            <a href="#">Forgot your password?</a>
          </small>
          <small>
            <a href="#">Dont have an account?</a>
          </small>
        </div>
      </form>
    );
  }
}

export default LoginForm;
