import React from "react";
import { Link } from "react-router-dom";

const SignupButton = () => {
  return (
    <Link
      className="ui olive button"
      style={{ marginLeft: "0.1em", color: "black" }}
      to="/signup"
    >
      Sign Up
    </Link>
  );
};

export default SignupButton;
