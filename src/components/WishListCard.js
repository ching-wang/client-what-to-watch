import React from "react";
import { Card, Button, Image } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

export const WishListCard = ({ wishList }) => {
  const history = useHistory();

  console.log(wishList);

  return (
    <Card>
      <Image
        src="https://poster.keepcalmandposters.com/2643661.png"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{wishList.name}</Card.Header>
        <Card.Meta>Testing header</Card.Meta>
        <Card.Description>Some good filums.</Card.Description>
        <Card.Content extra>
          <Button onClick={() => history.push(`/wishlists/${wishList.id}`)}>
            Go to wishlist
          </Button>
        </Card.Content>
      </Card.Content>
    </Card>
  );
};
