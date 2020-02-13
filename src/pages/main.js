import React from "react";
import Hero from "./hero";
import { Welcome } from "./welcome";

const MainContainer = ({ user }) => {
  return (
    <span style={{ color: "white" }}>
      <Hero user={user} />
      {/* {!user ? <Hero user={user} /> : <Welcome />} */}
    </span>
  );
};

export default MainContainer;
