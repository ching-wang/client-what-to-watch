import React, { useState, useEffect } from "react";
import API from "../adapters/API";

const SignupForm = ({ onSuccess }) => {
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
      .then(user => onSuccess(user))
      .catch(errorPromise => {
        errorPromise.then(errorData => setErrors(errorData.errors));
      });
  };

  return (
    <form onSubmit={handleSubmit} onChange={handleChange}>
      {errors.join(", ")}
      <input
        type="username"
        name="username"
        placeholder="username"
        value={formData.username}
      />
      <input
        type="email"
        name="email"
        placeholder="E mail"
        value={formData.email}
      />
      <input
        type="password"
        name="password"
        placeholder="Pass word"
        value={formData.password}
      />
      <input type="submit" value="Sign Up" />
    </form>
  );
};

export default SignupForm;
