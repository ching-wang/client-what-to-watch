import React from "react";
import { NavLink, Link } from "react-router-dom";

const SignupButton = () => {
  return (
    <NavLink
      className="ui olive button"
      style={{ marginLeft: "0.1em", color: "black" }}
      to="/signup"
    >
      Sign Up
    </NavLink>
  );
};

export default SignupButton;
