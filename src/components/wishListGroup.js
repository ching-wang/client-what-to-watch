import React from "react";
import { Card } from "semantic-ui-react";
import { WishListCard } from "./WishListCard";
import API from "../adapters/API";

const WishListGroup = ({ user, deleteWishlist }) => {

  if (!user) {
    return <></>;
  }
  if (!user.wish_lists) {
    console.warn(JSON.stringify({ user }));
    return (
      <>
        <h1>No wishlists :-(</h1>
      </>
    );
  }

  return (
    <>
      <h1>
        You have {user.wish_lists.length}{" "}
        {user.wish_lists.length > 1 ? "wishLists" : "wishlist"}
      </h1>
      <br></br>
      <Card.Group centered={true} itemsPerRow={3}>
        {user.wish_lists.map(wishList => (
          <WishListCard
            wishList={wishList}
            use={user}
            handleDeleteWishlist={deleteWishlist}
          />
        ))}
      </Card.Group>
    </>
  );
};

export default WishListGroup;
