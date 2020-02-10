import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Form, Button } from "semantic-ui-react";
import API from "../adapters/API";
import { ErrorMessage } from "./errorMessage";

const LoginForm = ({ onLoginSuccess }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleLoginResponse = loginResponse => {
    if (!loginResponse.token) {
      throw new Error("Bad login response! " + JSON.stringify(loginResponse));
    }
    localStorage.token = loginResponse.token;
    return API.validate().then(res => res.user);
  };

  const handleSubmit = event => {
    event.preventDefault();
    API.login(formData)
      .then(handleLoginResponse)
      .then(onLoginSuccess)
      .catch(setError);
  };

  const redirectLink = () => {
    return <Link to="/login" />;
  };

  if (error) return <ErrorMessage error={error} message={redirectLink} />;

  return (
    <>
      <h2>Please Login </h2>
      <Form onSubmit={handleSubmit} onChange={handleChange} inverted>
        <Form.Field>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            defaultValue={formData.email}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            defaultValue={formData.password}
          />
        </Form.Field>
        <Form.Checkbox inline label="Remember Me" />
        <Button className="login-btn" floated="right" color="olive" type="submit">
          LOG IN
        </Button>
        <br></br>
        <br></br>
        <Link to="/">Forgot your password?</Link>
        <br></br>
        <br></br>
      </Form>
      <h4>
        Don't have an account?{" "}
        <NavLink to="/signup" style={{ color: "#ebe534" }}>
          {" "}
          Get Start Now{" "}
        </NavLink>
      </h4>
    </>
  );
};

export default LoginForm;
