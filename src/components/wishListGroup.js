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

  // if (!wishLists) {
  //   console.warn(JSON.stringify({ user }));
  //   return (
  //     <>
  //       <h1>No wishlists :-(</h1>
  //     </>
  //   );
  // }

  return (
    <>
      {wishLists.length < 1 ? (
        <>
          {" "}
          <h1>
            You have {wishLists.length} &nbsp;
            {wishLists.length > 1 ? "wishLists" : "wishlist"}
            <Container textAlign="center">
              <h1 className="wishlist-hero">Why not create one now? </h1>
              <NewWishlist />
            </Container>{" "}
          </h1>
        </>
      ) : (
        <>
          <Grid columns={3}>
            <Grid.Column>
              <h1>
                You have {wishLists.length} &nbsp;
                {wishLists.length > 1 ? "wishLists" : "wishlist"}
                <NewWishlist />
              </h1>
            </Grid.Column>
          </Grid>{" "}
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

      {/* <Grid columns={3}>
        <Grid.Column>
          <h1>
            You have {wishLists.length} &nbsp;
            {wishLists.length > 1 ? "wishLists" : "wishlist"}
          </h1>
        </Grid.Column>
      </Grid>

      <br />
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

      {wishLists.length < 1 ? (
        <>
          <Container textalign="center">
            <h1 className="wishlist-hero">Why not create one now? </h1>
            <NewWishlist />
          </Container>{" "}
        </>
      ) : (
        ""
      )} */}
    </>
  );
};

export default WishListGroup;
