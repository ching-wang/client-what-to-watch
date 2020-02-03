import React from "react";
import { Card, Button, Image } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

export const WishListCard = ({ wishList }) => {
  const history = useHistory();

  console.log(wishList);

  return (
    <Card>
      <Image
        src="https://yada.org/wp-content/uploads/2018/11/just-in-the-time-for-the-weekend-our-list-of-5-classic-movies-for-a-relaxing-weekend-in.-these-movie.jpg"
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
