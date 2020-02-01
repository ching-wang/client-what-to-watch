import React from "react";
import { Link } from "react-router-dom";
import ProfileDetail from "../components/profileDetail";

const Profile = ({
  user,
  handleLogOut,
  handleProfileSubmit,
  handleProfileOnChange
}) => {
  return (
    <>
      <ProfileDetail
        user={user}
        handleLogOut={handleLogOut}
        handleSubmit={handleProfileSubmit}
        handleOnChange={handleProfileOnChange}
      />
    </>
  );
};

export default Profile;
