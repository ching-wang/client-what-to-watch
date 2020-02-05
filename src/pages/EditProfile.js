import React from "react";
import ProfileForm from "../components/profileForm";


const EditProfile = ({
  user,
  handleOnSubmit,
  handleProfileChange,
  handleDeleteAccount
}) => {
  return (
    <>
      <ProfileForm
        user={user}
        handleOnChange={handleProfileChange}
        handleOnSubmit={handleOnSubmit}
        handleDeleteAccount={handleDeleteAccount}
      />
    </>
  );
};

export default EditProfile;
