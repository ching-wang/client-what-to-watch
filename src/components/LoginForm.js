import React, { useState, useEffect } from "react";
import API from "../adapters/API";
import { Button, Form } from "semantic-ui-react";

const LoginForm = ({ onSuccess }) => {
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
    API.login(formData).then(user => onSuccess(user));
  };

  return (
    <form onSubmit={handleSubmit} onChange={handleChange} className="ui form">
      <div className="filed">
        <div className="ui input">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
          />
        </div>
      </div>
      <div className="filed">
        <div className="ui input">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
          />
        </div>
      </div>
      <input className="ui black button" type="submit" value="Login" />
    </form>
  );
};

export default LoginForm;
