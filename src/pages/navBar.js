import React from "react";
import { Menu, Icon, Popup } from "semantic-ui-react";
import LogoutButton from "../components/logoutButton";
import { NavSearchBar } from "../components/navSearchBar";
import { useHistory, useLocation } from "react-router-dom";

const NavBar = ({ user, onLogout }) => {
  const history = useHistory();
  const { pathname } = useLocation();

  console.log(pathname);

  function renderNavSearchBar() {
    if (pathname !== "/") {
      return (
        <Menu.Item position="right">
          <NavSearchBar />
        </Menu.Item>
      );
    }
  }

  return (
    <Menu inverted className="top-menu">
      <Menu.Item header>
        <Popup
          content="Go back home page"
          size="mini"
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
      <Menu.Item position="right">{renderNavSearchBar()}</Menu.Item>
      {user ? (
        <>
          <Menu.Menu position="right">
            <Popup
              content="View Profile"
              size="mini"
              position="bottom center"
              trigger={
                <Menu.Item onClick={() => history.push("/profile")}>
                  Profile
                </Menu.Item>
              }
            />
            <Popup
              content="View Wishlists"
              size="mini"
              position="bottom center"
              trigger={
                <Menu.Item onClick={() => history.push("/wishlists")}>
                  Wishlists
                </Menu.Item>
              }
            />
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
