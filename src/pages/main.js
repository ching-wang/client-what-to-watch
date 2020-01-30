import React, { useState } from "react";
import Hero from "./hero";
import Profile from "./profile";
import Link from "react-router-dom";

const MainContainer = ({ user, onLogout }) => {
  return (
    <span style={{ backgroundColor: "#f8fc03" }}>
      {!user ? <Hero /> : <Profile user={user} handleLogOut={onLogout} />}
    </span>
  );
};

export default MainContainer;
