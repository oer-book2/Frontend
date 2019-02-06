import React from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";

class LoginForm extends React.Component {
  onChange = e => {
    this.props.loginOnChange({
      ...this.props.loginInfo,
      [e.target.name]: e.target.value
    });
  };

  logIn = e => {
    e.preventDefault();
    const loginInfo = this.props.loginInfo;
    const endpoint = `https://oerbookr2.herokuapp.com/oerbooker/login`;
    console.log(loginInfo);

    axios
      .post(endpoint, loginInfo)
      .then(res => localStorage.setItem("jwt", res.data.token))
      .catch(err => alert("Username / password mismatched", err));
  };

  render() {
    return (
      <form className="login-form">
        <input
          type="text"
          name="name"
          value={this.props.loginInfo.name}
          onChange={this.onChange}
        />
        <input
          type="password"
          name="password"
          value={this.props.loginInfo.password}
          onChange={this.onChange}
        />
        <input type="button" value="Submit" onClick={this.logIn} />

        <div className="other-options">
          <small>
            <a href="#">Forgot your password?</a>
          </small>
          <small>
            <Link to="/Sign-up">Dont have an account?</Link>
          </small>
        </div>
      </form>
    );
  }
}

export default LoginForm;
