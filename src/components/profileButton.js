import React from "react";
import { Menu } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

const ProfileButton = props => {
  const history = useHistory();
  return (
    <Menu.Item onClick={() => history.push("/profile")}>Profile</Menu.Item>
  );
};

export default ProfileButton;
