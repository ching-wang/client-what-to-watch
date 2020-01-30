import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import { Header, Container } from "semantic-ui-react";

const Login = ({ onLoginSuccess }) => {
  return (
    <>
      <div className="ui text container">
        <LoginForm onLoginSuccess={onLoginSuccess} />
      </div>
    </>
  );
};

export default Login;
