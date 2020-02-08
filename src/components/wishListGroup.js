import React, { useState, useEffect } from "react";
import { Card, Button, Grid } from "semantic-ui-react";
import { WishListCard } from "./WishListCard";
import { NavLink } from "react-router-dom";
import API from "../adapters/API";

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

  if (!wishLists) {
    console.warn(JSON.stringify({ user }));
    return (
      <>
        <h1>No wishlists :-(</h1>
      </>
    );
  }

  return (
    <>
      <Grid columns={2}>
        <Grid.Column>
          <h1>
            You have {wishLists.length} &nbsp;
            {wishLists.length > 1 ? "wishLists" : "wishlist"}
          </h1>
        </Grid.Column>
        <Grid.Column>
          <Button color="olive" size="small">
            <NavLink style={{ color: "black" }} to="wishlist/new">
              {" "}
              + New Wishlist{" "}
            </NavLink>
          </Button>
        </Grid.Column>
      </Grid>

      <br></br>
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
  );
};

export default WishListGroup;
