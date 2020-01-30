import React from "react";
import { Link } from "react-router-dom";
import { showProfile as profileDetails } from "../components/profileDetail";

const Profile = ({ user, handleLogOut }) => {
  return (
    <>
      <showProfile user={user} />
      <Link to="/" onClick={() => handleLogOut()}>
        logout
      </Link>
    </>
  );
};

export default Profile;
