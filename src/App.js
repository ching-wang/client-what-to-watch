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
import EditWishlist from "./pages/editWishlist";
import CreateWishlist from "./pages/createWishlist";
import MovieContainer from "./pages/movieContainer";
import WishList from "./pages/wishList";
import { SearchResults } from "./pages/searchResults";
import { Welcome } from "./pages/welcome";
import { Footer } from "./pages/footer";

function App() {
  const [user, setUser] = useState(null); 
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
    history.push("/welcome");
  };

  const handleProfileSubmit = (event, userId, profileFormData) => {
    event.preventDefault();
    API.updateProfile(userId, profileFormData)
      .then(data => {
        handleUser(data.user);
      })
      .then(history.push("/profile"));
  };

  const handleDeleteAccount = userId => {
    API.deleteUser(userId).then(() => {
      logout();
    });
  };

  const handleWishListSubmit = (event, wishListFormData) => {
    event.preventDefault();
    API.createWishlist(wishListFormData).then(() => history.push("/wishlists"));
  };

  useEffect(() => {
    if (API.hasToken) {
      API.validate().then(res => {
        setUser(res.user);
      });
      // .then(() => setValidateUser(true));
      // .catch(errorPromise => {
      //   errorPromise.then(data => {
      //     setError(data);
      //   });
      // });
    }
  }, []);

  // API.hasToken

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
            render={routerProps => <MainPage {...routerProps} user={user} />}
          />
          <Route
            exact
            path="/welcome"
            render={routerProps => <Welcome user={user} {...routerProps} />}
          />
          <Route
            exact
            path="/profile"
            render={routerProps => (
              <Profile
                user={user}
                onLogout={logout}
                handleDeleteAccount={handleDeleteAccount}
                {...routerProps}
              />
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
              <SignUp handleLogin={handleLogin} {...routerProps} />
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
          <Route exact path="/wishlist/:wishListId/edit">
            <EditWishlist />
          </Route>
          <Route exact path="/movies/:imdbId">
            <MovieContainer user={user} addToWishlist={addToWishlist} />
          </Route>
          <Route path="/search">
            <SearchResults />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </Responsive>
    </>
  );
}

export default App;
