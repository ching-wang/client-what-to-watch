import React from "react";
import { Menu, Icon, Popup } from "semantic-ui-react";
import ProfileButton from "../components/profileButton";
import LogoutButton from "../components/logoutButton";
import WishListButton from "../components/wishListButton";
import SearchBar from "../components/searchBar";

const NavBar = ({ user, onLogout }) => {
  return (
    <Menu inverted className="top-menu">
      <Menu.Item header>
        <Popup
          content="Go back home page"
          size="small"
          position="bottom center"
          trigger={
            <a href="/">
              <h1>
                <Icon name="film" />
                &nbsp; What&nbsp;<small>to</small>&nbsp;Watch
              </h1>
            </a>
          }
        />
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
