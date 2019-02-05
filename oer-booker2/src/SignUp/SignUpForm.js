import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class SignUpForm extends React.Component {
  state = {
    name: "",
    password: "",
    confirmPassword: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  signUp = user => {
    const endpoint = `${process.env.REACT_APP_URL}/booker2/users`;

    if (this.state.password === this.state.confirmPassword) {
      axios
        .post(endpoint, user)
        .then(res => localStorage.setItem("jwt", res.data.token))
        .catch(err => console.log(err));
    } else {
      console.log(this.state.password, this.state.confirmPassword);
      alert("Ooop, looks like your passwords aren't matching");
    }
  };

  render() {
    return (
      <div className="sign-up-form">
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
          onChange={this.onChange}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={this.onChange}
        />
        <input
          type="button"
          value="Sign me up"
          onClick={() => this.signUp(this.state)}
        />

        <div className="other-options">
          <small>
            <Link to="/login">Already have an account?</Link>
          </small>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
