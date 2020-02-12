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

  const alert = useAlert();

  const handleSingupSubmit = (event, signupformData) => {
    event.preventDefault();
    API.signup(signupformData)
      .then(handleSignupResponse)
      .then(handleLogin)
      .catch(error => {
        alert.show(error);
      });
  };

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
        <Form.Field required>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            autoComplete="username"
            placeholder={"username"}
            defaultValue={signupformData.username}
          />
        </Form.Field>
        <Form.Field required>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="example@test.com"
            defaultValue={signupformData.email}
          />
        </Form.Field>
        <Form.Field required>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            defaultValue={signupformData.password}
          />
        </Form.Field>
        <Form.Field>
          <label for="avatar">Avatar</label>
          <input
            type="url"
            name="avatar"
            autoComplete="photo"
            placeholder="image link... (Optional)"
            defaultValue={signupformData.avatar}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="bio">Bio</label>
          <input
            type="text"
            name="bio"
            placeholder={"Bio (Optional)"}
            defaultValue={signupformData.bio}
          />
        </Form.Field>
        <br />
        <Button
          floated="right"
          className="signUpBtn"
          color="white"
          type="submit"
          inverted
        >
          SIGN UP
        </Button>
      </Form>
      <br />
      <h4>
        Already have an account? &nbsp;
        <NavLink to="/login" style={{ color: "#D4AC0D" }}>
          {" "}
          Click here to LOGIN{" "}
        </NavLink>
      </h4>
    </div>
  );
};

export default SignUpForm;
