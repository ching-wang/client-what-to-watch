import React from "react";
import { WelcomeGreeting } from "../components/welcomeDetail";

export const Welcome = ({ user }) => {
  return (
    <>
      <WelcomeGreeting user={user} />
    </>
  );
};
