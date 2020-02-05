import React from "react";
import { Card, Button, Image } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

export const WishListCard = ({
  wishList,
  handleDeleteWishlist,
  handleEditWishList
}) => {
  const history = useHistory();
  return (
    <Card>
      <Image src={wishList.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{wishList.name}</Card.Header>
        <Card.Meta>Testing header</Card.Meta>
        <Card.Description>{wishList.description}</Card.Description>
      </Card.Content>
      <Button
        color="olive"
        onClick={() => history.push(`/wishlists/${wishList.id}`)}
      >
        GO TO WISHLIST
      </Button>
      <Button color="red" onClick={() => handleEditWishList(wishList.id)}>
        EDIT
      </Button>
      <Button color="orange" onClick={() => handleDeleteWishlist(wishList.id)}>
        DELETE
      </Button>
    </Card>
  );
};
