import React from "react";
import { NavLink, Link } from "react-router-dom";

const LogoutButton = ({ handleLogOut }) => {
  return (
    <>
      <NavLink
        to="/"
        onClick={() => handleLogOut()}
        className="ui olive button"
        style={{ marginLeft: "0.1em", color: "black" }}
      >
        logout
      </NavLink>
    </>
  );
};

export default LogoutButton;
