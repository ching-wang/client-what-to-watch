import React from "react";
import { Card, Button, Image, Popup, Icon } from "semantic-ui-react";
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
                onClick={() => history.push("/profile/edit")}
              />
            }
          />
        </Card.Meta>
      </Card.Content>
      <Popup
        content="Delete this wishlist"
        position="top center"
        size="medium"
        trigger={
          <Button
            className="ui orange button"
            onClick={() => handleDeleteWishlist(wishList.id)}
          >
            DELETE
          </Button>
        }
      />

      {/* <Button
        color="olive"
        onClick={() => history.push(`/wishlists/${wishList.id}`)}
      >
        GO TO WISHLIST
      </Button>
      <Button color="red" onClick={() => handleEditWishList(wishList.id)}>
        EDIT
      </Button>
      <Button color="orange" >
        DELETE
      </Button> */}
    </Card>
  );
};
