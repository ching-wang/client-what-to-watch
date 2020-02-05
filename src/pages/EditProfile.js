import React from "react";
import ProfileForm from "../components/profileForm";

const EditProfile = ({
  user,
  profileFormData,
  handleOnSubmit,
  handleProfileChange
}) => {
  return (
    <ProfileForm
      user={user}
      // profileFormData={profileFormData}
      handleOnChange={handleProfileChange}
      handleOnSubmit={handleOnSubmit}
    />
  );
};

export default EditProfile;
