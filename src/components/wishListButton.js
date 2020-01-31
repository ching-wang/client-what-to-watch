import React from "react";
import { NavLink, Link } from "react-router-dom";

const WishListButton = props => {
  return (
    <>
      <NavLink
        to="/wishlists"
        onClick={() => null}
        className="ui olive button"
        style={{ marginLeft: "0.1em", color: "black" }}
      >
        wishlists
      </NavLink>
    </>
  );
};

export default WishListButton;
