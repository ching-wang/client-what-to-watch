import React from "react";
import { Link } from "react-router-dom";
import ProfileDetail from "../components/profileDetail";

const Profile = ({ user, handleLogOut }) => {
  console.log(user);
  return (
    <>
      <ProfileDetail user={user} handleLogOut={handleLogOut} />
    </>
  );
};

export default Profile;
