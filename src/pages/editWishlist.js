import React from "react";
import WishlistForm from "../components/wishListForm";

const EditWishlist = ({ user, handleOnSubmit }) => {
  return (
    <>
      <WishlistForm user={user} handleOnSubmit={handleOnSubmit} />
    </>
  );
};

export default EditWishlist;
