import React from "react";
import SignUpForm from "../components/SignupForm";
const SignUp = ({ handleOnSubmit }) => {
  return (
    <>
      <div className="ui text container">
        <SignUpForm handleOnSubmit={handleOnSubmit} />
      </div>
    </>
  );
};

export default SignUp;
