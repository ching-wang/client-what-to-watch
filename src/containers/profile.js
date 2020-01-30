import React from "react";
import { Link } from "react-router-dom";

const Profile = ({ user }) => {
  return (
    <>
      <Link to="/profile">{user.username}</Link>
    </>
  );
};

export default Profile;
