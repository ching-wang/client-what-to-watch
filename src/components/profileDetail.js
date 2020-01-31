import React from "react";

const ProfileDetail = ({ user }) => {
  console.log(user.username);
  const wishLists = user.wish_lists;

  // for (const name in wishLists) {
  // console.log(name);

  return (
    <>
      <h1>Hello {user.username}</h1>
      {/* <ul>
        {user.wishLists.map(w => (
          <li>{w.name}</li>
        ))}
      </ul> */}
    </>
  );
};

export default ProfileDetail;
