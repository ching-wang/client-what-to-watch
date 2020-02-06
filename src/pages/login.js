import React from "react";
import LoginForm from "../components/LoginForm";

const Login = ({ onLoginSuccess }) => {
  return (
    <div className="ui text container">
      <div className="hero-container">
        <LoginForm onLoginSuccess={onLoginSuccess} />
      </div>
    </div>
  );
};

export default Login;
