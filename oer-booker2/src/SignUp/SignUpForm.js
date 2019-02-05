import React from "react";

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
    const endpoint = `https://oerbookr2.herokuapp.com/oerbooker/oerbooker/register`;

    if (this.state.password === this.state.confirmPassword) {
      axios
        .post(endpoint, user)
        .then(res => localStorage.setItem("jwt", res.data.token))
        .catch(err => console.log(err));
    } else {
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
          type="email"
          name="email"
          placeholder="Enter Email"
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
          name="confirm-password"
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
            <a href="#">Already have an account?</a>
          </small>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
