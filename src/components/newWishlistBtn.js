import React from "react";
import { Button, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export const NewWishlist = () => {
  return (
    <Button className="btn" color="olive" size="small">
      <NavLink style={{ color: "black" }} to="wishlist/new">
        {" "}
        <Icon name="add" /> New Wishlist{" "}
      </NavLink>
    </Button>
  );
};

export default NewWishlist;
