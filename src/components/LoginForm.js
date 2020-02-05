import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Button } from "semantic-ui-react";
import API from "../adapters/API";

const LoginForm = ({ onLoginSuccess }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    API.login(formData).then(onLoginSuccess);
  };

  return (
    <div className="hero-container">
      <h2>Please login here </h2>
      <br></br>
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
        <br></br>
        <Button color="white" type="submit" inverted>
          LOG IN
        </Button>
        <br></br>
        <br></br>
        <Link to="/">Forgot your password?</Link>
        <br></br>
        <br></br>
      </Form>
      <h4>Don't have an account?</h4>
      <Button size="small">
        <Link to="/signup">SIGN UP NOW </Link>
      </Button>
    </div>
  );
};

export default LoginForm;

// onClick={() => history.push("/signup")}
