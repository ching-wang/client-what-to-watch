import React, { useState, useEffect } from "react";
import "./App.css";
import API from "./adapters/API";
import { Switch, Route, Redirect } from "react-router-dom";
import { Responsive } from "semantic-ui-react";
import NavBar from "./pages/navBar";
import MainPage from "./pages/main";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import WishLists from "./pages/wishLists";
import Profile from "./pages/profile";

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [validateUser, setValidateUser] = useState(false);
  const [wishLists, setWishlists] = useState([]);

  const logout = () => {
    setUser(null);
    API.clearToken();
  };

  const handleUser = user => {
    setUser(user);
  };

  const handleChangeSubmit = event => {
    event.preventDefault();
  };

  const handleChangeProfile = event => {};

  useEffect(() => {
    if (API.hasToken()) {
      API.validate()
        .then(res => handleUser(res.user))
        .then(() => setValidateUser(true))
        .catch(errorPromise => {
          errorPromise.then(data => {
            setError(data);
          });
        });
    } else {
      setValidateUser(true);
    }
  }, []);

  return (
    <>
      <Responsive>
        <NavBar user={user} onLogout={logout} />
      </Responsive>
      <Responsive>
        <Switch>
          <Route
            exact
            path="/"
            render={routerProps => <MainPage {...routerProps} />}
          />
          <Route
            exact
            path="/profile"
            render={routerProps => (
              <Profile
                user={user}
                onLogout={logout}
                {...routerProps}
                handleProfileOnChange={handleChangeProfile}
                handleProfileSubmit={handleChangeSubmit}
              />
            )}
          />
          <Route
            exact
            path="/signup"
            render={routerProps => (
              <SignUp onSuccess={handleUser} {...routerProps} />
            )}
          />
          <Route exact path="/login">
            {user ? (
              <Redirect to="/profile" />
            ) : (
              <Login onLoginSuccess={handleUser} user={user} />
            )}
          </Route>
          <Route exact path="/wishlists">
            <WishLists user={user} />
          </Route>
        </Switch>
      </Responsive>
    </>
  );
}

export default App;
