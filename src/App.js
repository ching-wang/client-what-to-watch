import React, { useState, useEffect } from "react";
import "./App.css";
import API from "./adapters/API";
import { Switch, Route, Redirect } from "react-router-dom";
import { Responsive } from "semantic-ui-react";
import NavBar from "./pages/navBar";
import MainPage from "./pages/main";
import Login from "./pages/login";
import SignUp from "./pages/signup";

function App() {
  const [user, setUser] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState(null);
  const [validateUser, setValidateUser] = useState(false);
  const [wishLists, setWishlists] = useState([]);
  const [login, setLogin] = useState(false);

  const logout = () => {
    setUser(null);
    API.clearToken();
  };

  const handleUser = user => {
    setUser(user);
    console.log(user);
  };

  useEffect(() => {
    if (API.hasToken()) {
      API.validate()
        .then(handleUser)
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

  const showlogin = () => {
    setLogin(true);
  };

  // if (!validateUser && !error)
  //   return <div>Validation is in processing... Please wait...</div>;

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
              <MainPage user={user} onLogout={logout} {...routerProps} />
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
              <Login onSuccess={handleUser} user={user} />
            )}
          </Route>
        </Switch>
      </Responsive>
    </>
  );
}

export default App;
