import React, { useState } from "react";
import API from "../adapters/API";
import { Form, Button, Segment, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";

const SignUpForm = ({ handleOnSubmit }) => {
  const [signupformData, setSignupformData] = useState({
    username: "",
    avatar: "",
    bio: "",
    email: "",
    password: ""
  });

  // const [errors, setErrors] = useState([]);

  const handleOnChange = event => {
    setSignupformData({
      ...signupformData,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div className="hero-container">
      <h2>Sign Up For Free </h2>
      <br></br>
      <Form
        onSubmit={event => handleOnSubmit(event, signupformData)}
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
        <br></br>
        <br></br>
        <Button className="signUpBtn" color="olive" type="submit">
          SIGN UP
        </Button>
      </Form>
      <h4>Already have an account?</h4>
      <Button size="small">
        <Link to="/login">Log in </Link>
      </Button>
    </div>
  );
};

export default SignUpForm;
