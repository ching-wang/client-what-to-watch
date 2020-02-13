import React from "react";
import Hero from "./hero";

const MainContainer = ({ user }) => {
  return (
    <span style={{ color: "white" }}>
      <Hero user={user} />
    </span>
  );
};

export default MainContainer;
