import React from "react";
import WishlistForm from "../components/wishListForm";
import { Container } from "semantic-ui-react";

const CreateWishList = ({ user, handleOnSubmit }) => {
  return (
    <Container>
      <div className="hero-container">
        <h1>Create a wishlist </h1>
        <WishlistForm user={user} handleOnSubmit={handleOnSubmit} />
      </div>
    </Container>
  );
};

export default CreateWishList;
