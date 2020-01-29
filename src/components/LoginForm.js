import React, { useState, useEffect } from "react";
import API from "../adapters/API";

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
    <form onSubmit={handleSubmit} onChange={handleChange}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
      />
      <input type="submit" value="Login" />
    </form>
  );
};

export default LoginForm;
