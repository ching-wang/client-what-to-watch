import React from "react";
import Hero from "./hero";
import Profile from "./profile";
import { Welcome } from "./welcome";

const MainContainer = ({ user, onLogout }) => {
  return (
    <span style={{ color: "white" }}>
      {!user ? (
        <Hero user={user} />
      ) : (
        <>
          {/* <Profile user={user} handleLogOut={onLogout} /> */}
          <Welcome user={user} />
        </>
      )}
    </span>
  );
};

export default MainContainer;
