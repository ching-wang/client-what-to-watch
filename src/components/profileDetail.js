import React from "react";

const ProfileDetail = ({ user }) => {
  console.log(user.username);
  return (
    <>
      <h1>Hello{user.username}</h1>
    </>
  );
};

export default ProfileDetail;
