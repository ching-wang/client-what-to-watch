import React from "react";
import { NavLink, Link } from "react-router-dom";

const LoginButton = () => {
  return (
    <NavLink
      className="ui olive button"
      style={{ marginLeft: "0.1em", color: "black" }}
      to="/login"
    >
      Login
    </NavLink>
  );
};

export default LoginButton;

