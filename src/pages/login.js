import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import { Header, Container } from "semantic-ui-react";
import ErrorBoundary from "react-error-boundary";

// const loginErrorBoundary = (error, componentStack) => {
//   debugger;
//   alert(error, componentStack);
// };

const Login = ({ onLoginSuccess }) => {
  return (
    <div className="ui text container">
      <div className="hero-container">
        <h2>Please Login </h2>
        <LoginForm onLoginSuccess={onLoginSuccess} />
      </div>
    </div>
  );
};

export default Login;
