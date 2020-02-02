import React, { useState } from "react";
import { Menu, Icon } from "semantic-ui-react";
import ProfileButton from "../components/profileButton";
import LogoutButton from "../components/logoutButton";
import WishListButton from "../components/wishListButton";
import SearchBar from "../components/searchBar";

const NavBar = ({ user, onLogout }) => {
  const [fixed, setFixed] = useState(false);
  const [hiddenForm, setHiddenForm] = useState(true);

  const hideFixedMenu = () => setFixed(false);
  const showFixedMenu = () => setFixed(true);

  return (
    <Menu inverted className="top-menu">
      <Menu.Item header>
        <a href="/">
          <h1>
            <Icon name="film" />
            &nbsp; What&nbsp;<small>to</small>&nbsp;Watch
          </h1>
        </a>
      </Menu.Item>

      {user ? (
        <>
          <Menu.Item position="right">
            <SearchBar />
          </Menu.Item>
          <Menu.Menu position="right">
            <ProfileButton />
            <WishListButton />
            <LogoutButton handleLogOut={onLogout} />
          </Menu.Menu>
        </>
      ) : (
        <Menu.Menu position="right">
          <Menu.Item link href="/login">
            Log in
          </Menu.Item>
          <Menu.Item link href="/signup">
            Sign up
          </Menu.Item>
        </Menu.Menu>
      )}
    </Menu>
  );
};

export default NavBar;
