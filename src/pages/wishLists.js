import React from "react";
import WishListGroup from "../components/wishListGroup";
import { Container } from "semantic-ui-react";

const WishLists = ({ user, deleteWishlist }) => {
  return (
    <Container>
      <div className="page-container">
        <WishListGroup user={user} deleteWishlist={deleteWishlist} />
      </div>
    </Container>
  );
};

export default WishLists;
