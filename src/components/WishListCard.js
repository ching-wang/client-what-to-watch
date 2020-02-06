import React from "react";
import { Card, Button, Image, Popup, Icon } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import API from "../adapters/API";

export const WishListCard = ({
  wishList,
  handleDeleteWishlist,
  handleEditWishList
}) => {
  const history = useHistory();

  return (
    <Card>
      <Popup
        content="Click the picture see wishlist details"
        position="top right"
        size="medium"
        trigger={
          <Image
            src={wishList.image}
            wrapped
            ui={false}
            onClick={() => history.push(`/wishlists/${wishList.id}`)}
          />
        }
      />
      <Card.Content>
        <Card.Header>{wishList.name}</Card.Header>
        <Card.Meta>Testing header</Card.Meta>
        <Card.Description>{wishList.description}</Card.Description>
        <br></br>
        <Card.Meta>
          <Popup
            content="Edit this Wishlist"
            size="medium"
            position="left center"
            trigger={
              <Icon
                name="edit outline"
                size="large"
                color="orange"
                onClick={() => history.push(`/wishlist/${wishList.id}/edit`)}
              />
            }
          />
          <Popup
            content="Delete this wishlist"
            size="medium"
            position="top center"
            trigger={
              <Icon
                name="delete"
                size="large"
                color="orange"
                onClick={() => handleDeleteWishlist(wishList.id)}
              />
            }
          />
        </Card.Meta>
      </Card.Content>
    </Card>
  );
};
