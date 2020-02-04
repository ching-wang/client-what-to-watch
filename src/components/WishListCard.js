import React from "react";
import { Card, Button, Image } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

export const WishListCard = ({ wishList, handleDeleteWishlist }) => {
  const history = useHistory();

  return (
    <Card>
      <Image src={wishList.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{wishList.name}</Card.Header>
        <Card.Meta>Testing header</Card.Meta>
        <Card.Description>Some good filums.</Card.Description>
        <Card.Content extra>
          <Button onClick={() => history.push(`/wishlists/${wishList.id}`)}>
            Go to wishlist
          </Button>
          <Button onClick={() => handleDeleteWishlist(wishList.id)}>
            Delete wishlist
          </Button>
        </Card.Content>
      </Card.Content>
    </Card>
  );
};
