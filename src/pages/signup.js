import React from "react";
import SignUpForm from "../components/SignupForm";
const SignUp = ({ onSuccess }) => {
  return (
    <>
      <div className="ui text container">
        <SignUpForm handleSignUp={onSuccess} />
      </div>
    </>
  );
};

export default SignUp;
