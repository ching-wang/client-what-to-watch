import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import { Header, Container } from "semantic-ui-react";

const Login = ({ onLoginSuccess }) => {
  return (
    <Container text>
      <div className="ui text container">
        <LoginForm onLoginSuccess={onLoginSuccess} />
      </div>
    </Container>
  );
};

export default Login;
