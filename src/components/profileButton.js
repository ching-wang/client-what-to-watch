import React from "react";
import { Link } from "react-router-dom";

const ProfileButton = ({ handleLogOut }) => {
  return (
    <Link
      to="/"
      onClick={() => handleLogOut()}
      className="ui olive button"
      style={{ marginLeft: "0.1em", color: "black" }}
    >
      logout
    </Link>
  );
};

export default ProfileButton;
