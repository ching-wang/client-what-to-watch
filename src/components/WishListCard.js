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
        <Card.Description>{wishList.description}</Card.Description>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button
              color="olive"
              onClick={() => history.push(`/wishlists/${wishList.id}`)}
            >
              Go to wishlist
            </Button>
            <Button
              color="orange"
              onClick={() => handleDeleteWishlist(wishList.id)}
            >
              Delete
            </Button>
          </div>
        </Card.Content>
      </Card.Content>
    </Card>
  );
};
