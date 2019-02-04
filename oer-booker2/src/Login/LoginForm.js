import React from "react";

class LoginForm extends React.Component {
  state = {
    loginInfo: {
      name: "",
      password: ""
    }
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  logIn = loginInfo => {
    const endpoint = `${process.env.REACT_APP_URL}/oer_booker/login`;

    axios
      .post(endpoint, loginInfo)
      .then(res => localStorage.setItem("jwt", res.data.token))
      .catch(err => alert("Username / password mismatched"));
  };

  render() {
    return (
      <div className="login-form">
        <input
          type="text"
          name="name"
          value={this.state.email}
          onChange={this.onChange}
        />
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.onChange}
        />
        <input
          type="button"
          value="login"
          onClick={() => this.logIn(this.state.loginInfo)}
        />

        <div className="other-options">
          <small>
            <a href="#">Forgot your password?</a>
          </small>
          <small>
            <a href="#">Dont have an account?</a>
          </small>
        </div>
      </div>
    );
  }
}

export default LoginForm;
