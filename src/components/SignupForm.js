import React, { useState } from "react";
import API from "../adapters/API";
import { Form, Button, Segment, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";

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
      <h2>Sign Up For Free </h2>
      <br></br>
      <Form onSubmit={handleSubmit} onChange={handleChange} inverted>
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
        </Form.Field>
        <Button className="signUpBtn" color="olive" type="submit" inverted>
          Sign up
        </Button>
      </Form>
      <h4>Already signed up</h4>
      <Button size="small">
        <Link to="/login">Log me in </Link>
      </Button>
    </div>
  );
};

export default SignUpForm;
