import React from "react";
import { Menu } from "semantic-ui-react";

const LogoutButton = ({ handleLogOut }) => {
  return <Menu.Item onClick={() => handleLogOut()}>Log out</Menu.Item>;
};

export default LogoutButton;
