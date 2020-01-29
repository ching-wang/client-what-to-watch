import React, { useState, useEffect } from "react";
import "./App.css";
import API from "./adapters/API";
import { Switch, Route } from "react-router-dom";
import { Responsive } from "semantic-ui-react";
import NavBar from "./containers/navBar";
import MainPage from "./containers/main";
import Login from "./containers/login";
import SignUp from "./containers/signup";

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

  // if (!validateUser && !error)
  //   return <div>Validation is in processing... Please wait...</div>;

  return (
    <>
      <Responsive>
        <NavBar />
      </Responsive>
      <Switch>
        <Route
          path="/"
          exact
          render={routerProps => <MainPage {...routerProps} />}
        />
        <Route
          path="/login"
          exact
          render={routerProps => <Login user={user} {...routerProps} />}
        />
        <Route
          path="/signup"
          exact
          render={routerProps => <SignUp {...routerProps} />}
        />
      </Switch>
    </>
  );
}

export default App;
