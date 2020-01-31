import React from "react";
import { Menu } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

const WishListButton = props => {
  const history = useHistory();
  return (
    <Menu.Item onClick={() => history.push("/wishlists")}>Wishlists</Menu.Item>
  );
};

export default WishListButton;
