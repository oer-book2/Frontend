import React from "react";
import { Route, Link } from "react-router-dom";
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
    console.log("signing up");

    const user = this.props.signUpInfo;
    if (
      this.props.signUpInfo.password === this.props.signUpInfo.confirmPassword
    ) {
      let newUser = { name: user.name, password: user.password };

      axios
        .post(endpoint, newUser)
        .then(res => localStorage.setItem("jwt", res.data.token))
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
      <form className="sign-up-form" onSubmit={this.signUp}>
        <input
          type="text"
          name="name"
          placeholder="Enter full name"
          onChange={this.onChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={e => this.onChange(e)}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={e => this.onChange(e)}
        />
        <input type="button" value="Sign me up" onClick={this.signUp} />

        <div className="other-options">
          <small>
            <Link to="/login">Already have an account?</Link>
          </small>
        </div>
      </form>
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
