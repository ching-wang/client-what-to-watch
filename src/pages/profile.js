import React from "react";
import { Link } from "react-router-dom";
import ProfileDetail from "../components/profileDetail";

const Profile = ({ user, handleLogOut }) => {
  return (
    <>
      <ProfileDetail user={user} handleLogOut={handleLogOut} />
    </>
  );
};

export default Profile;
