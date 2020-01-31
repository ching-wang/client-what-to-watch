import React from "react";
import { Card } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import { WishListCard } from "./WishListCard";

const WishListCategoryList = ({ user }) => {
  if (!user) {
    return <Redirect to="/login"></Redirect>;
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
      <h1>Your wishlists</h1>
      <br></br>
      <Card.Group>
        {user.wish_lists.map(wishList => (
          <WishListCard wishList={wishList} />
        ))}
      </Card.Group>
    </>
  );
};

export default WishListCategoryList;
