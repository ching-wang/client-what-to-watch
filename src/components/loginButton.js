import React from "react";
import { Link } from "react-router-dom";

const LoginButton = () => {
  return (
    <Link
      className="ui olive button"
      style={{ marginLeft: "0.1em", color: "black" }}
      to="/login"
    >
      Login
    </Link>
  );
};

export default LoginButton;

