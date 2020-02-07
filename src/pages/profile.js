import React from "react";
import ProfileDetail from "../components/profileDetail";

const Profile = ({
  user,
  handleLogOut,
  handleProfileSubmit,
  handleProfileOnChange,
  handleDeleteAccount
}) => {
  if (!user) {
    return <></>;
  }
  return (
    <>
      <ProfileDetail
        user={user}
        handleLogOut={handleLogOut}
        handleSubmit={handleProfileSubmit}
        handleOnChange={handleProfileOnChange}
        onDeleteAccount={handleDeleteAccount}
      />
    </>
  );
};

export default Profile;
