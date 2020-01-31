import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import { Button, Container, Menu, Responsive } from "semantic-ui-react";
import { Link } from "react-router-dom";
import LoginButton from "../components/loginButton";
import SignupButton from "../components/sigupButton";
import ProfileButton from "../components/profileButton";
import button from "../components/button";
import LogoutButton from "../components/logoutButton";
import WishListButton from "../components/wishListButton";

const NavBar = ({ user, onLogout }) => {
  const [fixed, setFixed] = useState(false);
  const [hiddenForm, setHiddenForm] = useState(true);

  const hideFixedMenu = () => setFixed(false);
  const showFixedMenu = () => setFixed(true);

  return (
    <Responsive style={{ backgroundColor: "#f8fc03" }}>
      <Menu
        fixed={fixed ? "top" : null}
        inverted={!fixed}
        pointing={!fixed}
        secondary={!fixed}
        size="large"
      >
        <Container>
          <Menu.Item as="a" position="left">
            {
              <ReactSVG
                className="logo"
                src="/movie-roll.svg"
                style={{ marginButton: "1em" }}
              />
            }
            <h1 className="app-name">What to Watch</h1>
          </Menu.Item>

          <Menu.Item position="right">
            {user ? (
              <>
                <LogoutButton handleLogOut={onLogout} /> <ProfileButton />
                <WishListButton />
              </>
            ) : (
              <>
                <LoginButton /> <SignupButton />
              </>
            )}
          </Menu.Item>
        </Container>
      </Menu>
    </Responsive>
  );
};

export default NavBar;
/*<Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <Menu.Item as="a" position="left">
                  {<ReactSVG className="logo" src="/movie-roll.svg" />}
                  <h1 className="app-name">What to Watch</h1>
                </Menu.Item>

                <Menu.Item position="right">
                  <Button
                    as="a"
                    inverted={!fixed}
                    onClick={() => {
                      window.alert("login in here");
                    }}
                  >
                    Log in
                  </Button>
                  <Button
                    as="a"
                    inverted={!fixed}
                    primary={fixed}
                    style={{ marginLeft: "0.1em" }}
                  >
                    Sign Up
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>*/
