import React from "react";
import { NavLink, Link } from "react-router-dom";

const ProfileButton = props => {
  return (
    <>
      <NavLink
        to="/profile"
        onClick={() => null}
        className="ui olive button"
        style={{ marginLeft: "0.1em", color: "black" }}
      >
        profile
      </NavLink>
    </>
  );
};

export default ProfileButton;
