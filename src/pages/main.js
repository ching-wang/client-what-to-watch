import React from "react";
import Hero from "./hero";
import Profile from "./profile";

const MainContainer = ({ user, onLogout }) => {
  return (
    <span style={{ color: "white" }}>
      {!user ? (
        <Hero />
      ) : (
        <>
          <Profile user={user} handleLogOut={onLogout} />
        </>
      )}
    </span>
  );
};

export default MainContainer;
