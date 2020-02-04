import React from "react";
import WishlistForm from "../components/wishListForm";

const CreateWishList = ({ user, handleOnSubmit, handleProfileChange }) => {
  return (
    <>
      <WishlistForm
        user={user}
        // handleOnChange={handleProfileChange}
        // handleOnSubmit={handleOnSubmit}
      />
    </>
  );
};

export default CreateWishList;
