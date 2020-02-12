import React from "react";
import { Button, Icon } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";

export const NewWishlist = () => {
  return (
    <Link style={{ color: "black" }} to="wishlist/new">
      <Button className="btn" color="white" size="small" inverted>
        <Icon name="add" /> New Wishlist{" "}
      </Button>
    </Link>
  );
};

export default NewWishlist;
