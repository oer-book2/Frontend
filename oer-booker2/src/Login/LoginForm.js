import React from "react";

const LoginForm = () => (
  <div className="login-form">
    <input type="email" name="email" />
    <input type="password" name="password" />
    <input type="button" value="login" />

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

export default LoginForm;
