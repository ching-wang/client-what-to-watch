import React from "react";
import WishlistForm from "../components/wishListForm";

const CreateWishList = ({ user, handleOnSubmit }) => {
  return (
    <>
      <WishlistForm user={user} handleOnSubmit={handleOnSubmit} />
    </>
  );
};

export default CreateWishList;
