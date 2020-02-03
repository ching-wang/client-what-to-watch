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
import MovieCard from "./components/movieCard";
import { SearchResults } from "./pages/searchResults";

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [validateUser, setValidateUser] = useState(false);
  const [wishLists, setWishlists] = useState([]);
  const [movie, setMovie] = useState();
  const history = useHistory();

  const logout = () => {
    setUser(null);
    API.clearToken();
    history.push("/");
  };

  const handleUser = user => {
    setUser(user);
  };

  const handleLogin = user => {
    setUser(user);
    history.push("/");
  };

  const handleProfileSubmit = (event, userId, profileFormData) => {
    event.preventDefault();
    API.updateProfile(userId, profileFormData)
      .then(user => handleUser(user))
      .then(history.push("/"));
  };

  useEffect(() => {
    if (API.hasToken()) {
      API.validate()
        .then(res => {
          handleUser(res.user);
        })
        .then(() => setValidateUser(true))
        .catch(errorPromise => {
          errorPromise.then(data => {
            setError(data);
          });
        });
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
                // profileFormData={profileFormData}
                // handleProfileChange={handleProfileChange}
                handleOnSubmit={handleProfileSubmit}
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
            <Login onLoginSuccess={handleLogin} user={user} />
          </Route>
          <Route exact path="/wishlists/:id">
            <MovieLists user={user} />
          </Route>
          <Route exact path="/wishlists">
            <WishLists user={user} />
          </Route>
          <Route exact path="/movieLists">
            <MovieLists />
          </Route>
          <Route exact path="/movies/:imdbId">
            <MovieCard user={user} />
          </Route>
          <Route path="/search">
            <SearchResults />
          </Route>
        </Switch>
      </Responsive>
    </>
  );
}

export default App;
