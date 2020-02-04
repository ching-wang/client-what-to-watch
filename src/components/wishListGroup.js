import React, { useState } from "react";
import { Card, Button, Container, Grid } from "semantic-ui-react";
import { WishListCard } from "./WishListCard";
import { useHistory, Link } from "react-router-dom";
import API from "../adapters/API";

const WishListGroup = ({ user }) => {
  function deleteWishlist(wishlistId) {
    API.deleteWishlist(wishlistId).then(console.log);
  }

  // const [wishlist, setWishlist] = useState([...user.wish_lists]);

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
      <Grid columns={2} padded>
        <Grid.Column>
          <h1>
            You have {user.wish_lists.length} &nbsp;
            {user.wish_lists.length > 1 ? "wishLists" : "wishlist"}
          </h1>
        </Grid.Column>
        <Grid.Column>
          <Button basic color="olive" content="Olive" size="small">
            <Link to="wishlist/new"> Create a wishlist </Link>
          </Button>
        </Grid.Column>
      </Grid>
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
