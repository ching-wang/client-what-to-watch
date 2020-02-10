import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { useAlert } from "react-alert";
import API from "../adapters/API";

const SignUpForm = ({ handleLogin }) => {
  const [signupformData, setSignupformData] = useState({
    username: "",
    avatar: "",
    bio: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleOnChange = event => {
    setSignupformData({
      ...signupformData,
      [event.target.name]: event.target.value
    });
  };

  const handleSignupResponse = data => {
    if (data.token) {
      localStorage.token = data.token;
      return data.user;
    }
  };

  const handleSingupSubmit = (event, signupformData) => {
    event.preventDefault();
    API.signup(signupformData)
      .then(handleSignupResponse)
      .then(handleLogin)
      .catch(setError);
  };

  const alert = useAlert();
  if (error) {
    alert.show(error);
  }

  return (
    <div className="hero-container">
      <h2>Sign Up For Free </h2>
      <br></br>
      <Form
        onSubmit={event => handleSingupSubmit(event, signupformData)}
        onChange={event => handleOnChange(event)}
        className="ui form"
        inverted
      >
        <Form.Field>
          <label for="username">Username</label>
          <input
            type="text"
            name="username"
            autoComplete="username"
            placeholder={"username"}
            defaultValue={signupformData.username}
          />
        </Form.Field>
        <Form.Field>
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="example@test.com"
            defaultValue={signupformData.email}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            defaulValue={signupformData.password}
          />
        </Form.Field>
        <Form.Field>
          <label for="avatar">Avatar</label>
          <input
            type="url"
            name="avatar"
            autoComplete="photo"
            placeholder="image link..."
            defaultValue={signupformData.avatar}
          />
        </Form.Field>
        <Form.Field>
          <label for="bio">Bio</label>
          <input
            type="text"
            name="bio"
            placeholder={"Bio"}
            defaultValue={signupformData.bio}
          />
        </Form.Field>
        <Button className="signUpBtn" color="white" type="submit" inverted>
          SIGN UP
        </Button>
      </Form>
      <br></br>
      <h4>
        Already have an account?{" "}
        <NavLink to="/login" style={{ color: "#ebe534" }}>
          {" "}
          Click here to Login{" "}
        </NavLink>
      </h4>
    </div>
  );
};

export default SignUpForm;
