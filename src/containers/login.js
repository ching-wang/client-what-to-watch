import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import { Header, Container } from "semantic-ui-react";

const Login = () => {
  return (
    <>
      <div className="ui text container">
        <LoginForm />
      </div>
    </>
  );
};

export default Login;
