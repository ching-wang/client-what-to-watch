import React from "react";
import WishListGroup from "../components/wishListGroup";
import { Container } from "semantic-ui-react";

const WishLists = ({ user }) => {
  return (
    <Container>
      <div className="page-container">
        <WishListGroup user={user} />
      </div>
    </Container>
  );
};

export default WishLists;
