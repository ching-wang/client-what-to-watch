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
import CreateWishlist from "./pages/createWishlist";
import MovieContainer from "./pages/movieContainer";
import WishList from "./pages/wishList";
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

  const handleWishListSubmit = (event, wishListFormData) => {
    console.log(wishListFormData);
    event.preventDefault();
    API.createWishList(wishListFormData).then(console.log);
    // .then(user => handleUser(user))
    // .then(history.push("/"));
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

  const addToWishlist = (wishListId, imdbID) => {
    console.log({ wishListId, imdbID });
    API.addToWishList(wishListId, imdbID).then(console.log);
  };

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
          <Route exact path="/wishlists/:wishListId">
            <WishList />
          </Route>
          <Route exact path="/wishlists">
            <WishLists user={user} />
          </Route>
          <Route exact path="/wishlist/new">
            <CreateWishlist handleOnSubmit={handleWishListSubmit} user={user} />
          </Route>
          <Route exact path="/movies/:imdbId">
            <MovieContainer user={user} addToWishlist={addToWishlist} />
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
