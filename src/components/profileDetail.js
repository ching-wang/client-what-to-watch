import React from "react";

const showProfile = ({ user }) => {
  return (
    <>
      <h1>Hello {user.username}</h1>
    </>
  );
};

export default showProfile;
