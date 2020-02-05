import React, { useState } from "react";
import { Link, useHistory, NavLink } from "react-router-dom";
import { Form, Button } from "semantic-ui-react";
import API from "../adapters/API";

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

  let history = useHistory();

  const handleSubmit = event => {
    event.preventDefault();
    API.login(formData).then(onLoginSuccess);
  };

  return (
    <>
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
        <Button color="olive" type="submit">
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
          Sign up now{" "}
        </NavLink>
      </h4>
      {/* <Button size="small" onClick={() => history.push("/signup")}>
        SIGN UP
      </Button> */}
    </>
  );
};

export default LoginForm;
