import React, { useState, useEffect } from "react";
import API from "../adapters/API";

const SignUpForm = ({ onSuccess }) => {
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
    <form onSubmit={handleSubmit} onChange={handleChange} className="ui form">
      {errors.join(", ")}
      <div className="filed">
        <div className="ui input">
          <input
            type="username"
            name="username"
            placeholder="username"
            value={formData.username}
          />
        </div>
      </div>
      <div className="filed">
        <div className="ui input">
          <input
            type="email"
            name="email"
            placeholder="E mail"
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
      <input type="submit" value="Sign Up" className="ui black button" />
    </form>
  );
};

export default SignUpForm;
