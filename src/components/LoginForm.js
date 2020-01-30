import React, { useState } from "react";
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
    <form onSubmit={handleSubmit} onChange={handleChange} className="ui form">
      <div className="filed">
        <div className="ui input">
          <input
            type="email"
            name="email"
            placeholder="Email"
            defaultValue={formData.email}
          />
        </div>
      </div>
      <div className="filed">
        <div className="ui input">
          <input
            type="password"
            name="password"
            placeholder="Password"
            defaultValue={formData.password}
          />
        </div>
      </div>
      <input className="ui black button" type="submit" value="Login" />
    </form>
  );
};

export default LoginForm;
