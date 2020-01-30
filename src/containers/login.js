import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import { Header, Container } from "semantic-ui-react";

const Login = ({ onSuccess }) => {
  return (
    <>
      <div className="ui text container">
        <LoginForm onSuccess={onSuccess} />
      </div>
    </>
  );
};

export default Login;
