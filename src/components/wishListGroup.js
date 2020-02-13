import React, { useState, useEffect } from "react";
import { Card, Grid, Container } from "semantic-ui-react";
import { WishListCard } from "./WishListCard";
import API from "../adapters/API";
import { NewWishlist } from "./newWishlistBtn";

/**
 * A WishListGroup is a collection of wish lists belonging to the user.
 */
const WishListGroup = ({ user }) => {
  const [wishLists, setWishLists] = useState([]);
  useEffect(() => {
    API.getUserWishLists().then(setWishLists);
  }, []);

  if (!user) {
    return <></>;
  }

  function deleteWishlist(wishlistId) {
    API.deleteWishlist(wishlistId).then(() => {
      setWishLists(wishLists.filter(wl => wl.id !== wishlistId));
    });
  }

  return (
    <>
      {wishLists.length < 1 ? (
        <>
          {" "}
          <h1>
            You have &nbsp;{wishLists.length} &nbsp;
            {wishLists.length === 1 ? "wishlist" : "wishlists"}
            <Container textAlign="center">
              <h1 className="wishlist-hero">Why not create one now? </h1>
              <NewWishlist />
            </Container>{" "}
          </h1>
        </>
      ) : (
        <>
        <br/>
          <Grid>
              <h1>
                You have {wishLists.length} &nbsp;
                {wishLists.length === 1 ? "wishlist" : "wishlists"}
              </h1>
              <NewWishlist />
          </Grid>{" "}
          <br/>
          <Card.Group centered={true} itemsPerRow={4}>
            {wishLists.map(wishList => (
              <WishListCard
                key={wishList.id}
                wishList={wishList}
                use={user}
                handleDeleteWishlist={deleteWishlist}
              />
            ))}
          </Card.Group>
        </>
      )}
    </>
  );
};

export default WishListGroup;
