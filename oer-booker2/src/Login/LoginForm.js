import React from "react";
import axios from "axios";
import { connect } from "react-redux";

import "./login.css";
class LoginForm extends React.Component {
  state = {
    name: "",
    password: ""
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  logIn = e => {
    e.preventDefault();
    const loginInfo = this.state;
    const endpoint = "https://oerbookr2.herokuapp.com/oerbooker/login";

    axios
      .post(endpoint, loginInfo)
      .then(res => {
        localStorage.setItem("jwt", res.data.token);
        localStorage.setItem("name", this.state.name);

        this.props.updateLogin();
      })
      .catch(err => alert("Username / password mismatched", err));
  };

  render() {
    return (
      //onSubmit wont work
      <div className="login-container">
        <img
          className="logo"
          src={require("../images/OBRLogo.png")}
          alt="logo"
        />
        <form className="form">
          <input
            className="login-input"
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.onChange}
          />
          <input
            className="login-input"
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.onChange}
          />
          <p className="login-submit" onClick={this.logIn}>
            Log In
          </p>

          <div className="other-options">
            <small>
              <p className="re-route" onClick={this.props.signUp}>
                Dont have an account?
              </p>
            </small>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loginInfo: state.loginInfo,
  signUpInfo: state.signUpInfo
});

export default connect(
  mapStateToProps,
  {}
)(LoginForm);
