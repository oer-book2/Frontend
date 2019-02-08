import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { signUpOnChange } from "../actions";

class SignUpForm extends React.Component {
  onChange = e => {
    this.props.signUpOnChange({
      ...this.props.signUpInfo,
      [e.target.name]: e.target.value
    });
  };

  signUp = _ => {
    const endpoint = `https://oerbookr2.herokuapp.com/oerbooker/register`;

    const user = this.props.signUpInfo;
    if (
      this.props.signUpInfo.password === this.props.signUpInfo.confirmPassword
    ) {
      let newUser = { name: user.name, password: user.password };

      axios
        .post(endpoint, newUser)
        .then(res => {
          localStorage.setItem("jwt", res.data.token);
          localStorage.setItem("name", user.name);
          this.props.updateLogin();
        })
        .catch(err => console.log(err));
    } else {
      console.log(
        this.props.signUpInfo.password,
        this.props.signUpInfo.confirmPassword
      );
      alert("Ooop, looks like your passwords aren't matching");
    }
  };

  render() {
    return (
      <div className="login-container">
        <img
          className="logo"
          src={require("../images/OBRLogo.png")}
          alt="logo"
        />

        <form className="form sign-up" onSubmit={this.signUp}>
          <input
            className="login-input"
            type="text"
            name="name"
            placeholder="Enter full name"
            onChange={this.onChange}
          />
          <input
            className="login-input"
            type="password"
            name="password"
            placeholder="Password"
            onChange={e => this.onChange(e)}
          />
          <input
            className="login-input"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={e => this.onChange(e)}
          />
          <p className="login-submit" onClick={this.signUp}>
            Sign Up
          </p>

          <div className="other-options">
            <small>
              <p className="re-route" onClick={this.props.loginMe}>
                Already have an account?
              </p>
            </small>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  signUpInfo: state.signUpInfo
});

export default connect(
  mapStateToProps,
  {
    signUpOnChange
  }
)(SignUpForm);
