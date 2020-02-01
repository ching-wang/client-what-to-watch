import React from "react";
import ProfileForm from "../components/profileForm";

const EditProfile = ({
  user,
  profileFormData,
  handleProfileSubmit,
  handleProfileChange
}) => {
  return (
    <ProfileForm
      user={user}
      profileFormData={profileFormData}
      handleOnChange={handleProfileChange}
      handleOnSubmit={handleProfileSubmit}
    />
  );
};

export default EditProfile;
