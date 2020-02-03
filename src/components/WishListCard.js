import React from "react";
import { Card, Button } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

export const WishListCard = ({ wishList }) => {
  const history = useHistory();

  console.log(wishList);

  return (
    <Card>
      <Card.Content>
        <Card.Header>{wishList.name}</Card.Header>
        <Card.Meta>Testing header</Card.Meta>
        <Card.Description>Some good filums.</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button onClick={() => history.push(`/wishlists/${wishList.id}`)}>
          Go to wishlist
        </Button>
      </Card.Content>
    </Card>
  );
};
