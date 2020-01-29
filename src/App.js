import React, { useState, useEffect } from "react";
import "./App.css";
import Homepage from "./components/homePage";
import API from "./adapters/API";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";

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

  if (!validateUser && !error)
    return <div>Validation is in processing... Please wait...</div>;

  return (
    <>
      <div className="App">
        {error && <div style={{ color: "red" }}>{JSON.stringify(error)}</div>}
        <Router>
          <Switch>
            <Route exact path="/signup">
              {!user ? (
                <div>
                  <SignupForm onSuccess={handleUser} user={user} />
                  Already have an account? Please{" "}
                  <Link to="/login">log in </Link>
                  instead.
                </div>
              ) : (
                <Redirect to="/" />
              )}
            </Route>
            <Route exact path="/login">
              {!user ? (
                <div>
                  <LoginForm onSuccess={handleUser} user={user} />
                  Don't have an account? Please{" "}
                  <Link to="/signup">sign up </Link>
                  instead.
                </div>
              ) : (
                <Redirect to="/" />
              )}
            </Route>
            <Route exact path="/">
              {user ? (
                <div>
                  <p>
                    Logged in as {user.username}
                    {" - "}
                    <Link to="" onClick={() => logout()}>
                      logout
                    </Link>
                  </p>
                </div>
              ) : (
                <Redirect to="/signup" />
              )}
            </Route>
          </Switch>
        </Router>
      </div>
      <Homepage />
    </>
  );
}

export default App;
