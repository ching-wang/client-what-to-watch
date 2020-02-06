import React from "react";
import SignUpForm from "../components/SignupForm";
const SignUp = ({ handleLogin }) => {
  return (
    <>
      <div className="ui text container">
        <SignUpForm handleLogin={handleLogin} />
      </div>
    </>
  );
};

export default SignUp;
