import React from "react";

const SignUpForm = () => {
  <div className="sign-up-form">
    <input type="text" name="name" placeholder="Enter full name" />
    <input type="email" name="email" placeholder="Enter Email" />
    <input type="password" name="password" placeholder="Password" />
    <input
      type="password"
      name="confirm-password"
      placeholder="Confirm Password"
    />
    <input type="button" value="Sign me up" />

    <div className="other-options">
      <small>
        <a href="#">Already have an account?</a>
      </small>
    </div>
  </div>;
};

export default SignUpForm;
