import React from "react";
import { Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

export const NewWishlist = () => {
  return (
    <Link to="/wishlist/new">
      <Button className="btn" color="olive" size="small">
        <Icon name="add" /> NEW WISHLIST{" "}
      </Button>
    </Link>
  );
};

export default NewWishlist;
