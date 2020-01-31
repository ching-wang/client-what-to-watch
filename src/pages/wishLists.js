import React from "react";
import WishListCategoryList from "../components/wishListCategoryList";
import { Container } from "semantic-ui-react";

const WishLists = ({ user }) => {
  return (
    <Container>
      <div className="page-container">
        <WishListCategoryList user={user} />
      </div>
    </Container>
  );
};

export default WishLists;
