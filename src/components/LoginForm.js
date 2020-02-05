import React, { useState } from "react";
import { Link, usehistory, useHistory } from "react-router-dom";
import { Form, Button } from "semantic-ui-react";
import API from "../adapters/API";
import SignUpForm from "./SignupForm";

const LoginForm = ({ onLoginSuccess }) => {
  let history = useHistory();
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
        <Button color="orange" type="submit" inverted>
          Log in
        </Button>
        <br></br>
        <br></br>
        <br></br>
      </Form>
      <h4>Haven't signed up yet?</h4>
      <Button size="small">
        <Link to="/signup">Sign up now </Link>
      </Button>
    </div>
  );
};

export default LoginForm;

// onClick={() => history.push("/signup")}
