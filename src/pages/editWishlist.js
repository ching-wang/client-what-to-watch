import React from "react";
import { EditWishlistForm } from "../components/editWishlistForm";
import { Container } from "semantic-ui-react";

const EditWishlist = () => {
  return (
    <>
      <Container>
        <div className="hero-container">
          <h1>Edit wishlist </h1>
          <EditWishlistForm />
        </div>
      </Container>
    </>
  );
};

export default EditWishlist;
