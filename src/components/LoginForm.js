import React, { useState } from "react";
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
      <h2>Log in</h2>
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
        <Button color="olive" type="submit" inverted>
          Log in
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
