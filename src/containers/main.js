import React, { useState } from "react";
import Hero from "./hero";
import Profile from "./profile";
import Link from "react-router-dom";

const MainContainer = ({ user, onLogout }) => {
  return <>{!user ? <Hero /> : <Profile user={user.username} handleLogOut={onLogout} />}</>;
};

export default MainContainer;
