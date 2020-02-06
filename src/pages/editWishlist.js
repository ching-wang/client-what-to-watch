import React from "react";
import { EditWishlistForm } from "../components/editWishlistForm";
import { Container } from "semantic-ui-react";

const EditWishlist = props => {
  return (
    <>
      <Container>
        <div className="hero-container">
          <h1>Edit wishlist </h1>
          <EditWishlistForm
            onWishlistChangeSubmit={props.handleUpdateWishListSubmit}
          />
        </div>
      </Container>
    </>
  );
};

export default EditWishlist;
