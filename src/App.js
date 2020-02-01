import React, { useState, useEffect } from "react";
import "./App.css";
import API from "./adapters/API";
import { Switch, Route, useHistory } from "react-router-dom";
import { Responsive } from "semantic-ui-react";
import NavBar from "./pages/navBar";
import MainPage from "./pages/main";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import WishLists from "./pages/wishLists";
import Profile from "./pages/profile";
import EditProfile from "./pages/EditProfile";
import MovieLists from "./pages/movieLists";

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [validateUser, setValidateUser] = useState(false);
  const [wishLists, setWishlists] = useState([]);
  const history = useHistory();
  const [profileFormData, setProfileFormData] = useState({
    username: "",
    email: "",
    user_id: ""
  });

  const logout = () => {
    setUser(null);
    API.clearToken();
    history.push("/");
  };

  const handleUser = user => {
    setUser(user);
    history.push("/");
  };

  const handleProfileChange = event => {
    setProfileFormData({
      ...profileFormData,
      [event.target.name]: event.target.value
    });
  };

  console.log(profileFormData);

  const handleProfileSubmit = event => {
    event.preventDefault();
    API.updateProfile(user.id, profileFormData).then(user => setUser(user));
  };

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
              <Profile user={user} onLogout={logout} {...routerProps} />
            )}
          />
          <Route
            exact
            path="/profile/edit"
            render={routerProps => (
              <EditProfile
                profileFormData={profileFormData}
                handleProfileChange={handleProfileChange}
                handleProfileSubmit={handleProfileSubmit}
                user={user}
                {...routerProps}
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
            <Login onLoginSuccess={handleUser} user={user} />
          </Route>
          <Route exact path="/wishlists/:id">
            <MovieLists user={user} />
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
