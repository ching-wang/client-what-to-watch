import React, { useState } from "react";
import API from "../adapters/API";
import { Form, Button } from "semantic-ui-react";

const SignUpForm = ({ handleSignUp }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState([]);

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    API.signup(formData)
      .then(user => handleSignUp(user))
      .catch(errorPromise => {
        errorPromise.then(errorData => setErrors(errorData.errors));
      });
  };

  return (
    <div className="hero-container">
      <h2>Sign Up</h2>
      <br></br>
      <Form onSubmit={handleSubmit} onChange={handleChange}>
        {/* {errors.join(", ")} */}
        <Form.Field>
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="username"
            defaulValue={formData.username}
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            defaulValue={formData.email}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            defaulValue={formData.password}
          />
          <br></br>
          <br></br>
          <br></br>
          <Button primary type="submit">
            Sign Up
          </Button>
        </Form.Field>
      </Form>
    </div>
  );
};

export default SignUpForm;
