import React, { useState } from "react";
import { Card, Image, Icon, Popup, Confirm, Button } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

export const WishListItem = ({ wishListItem, handleDeleteWishlistItem }) => {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState(
    "The item has been removed from your wishlist"
  );

  const handleConfirm = () => {
    setOpen(false);
    setResult("confirmed");
    handleDeleteWishlistItem(wishListItem.id);
  };

  const handleCancel = () => {
    setOpen(false);
    setResult("cancelled");
  };

  const show = () => {
    setOpen(true);
  };

  return (
    <Card>
      <Popup
        content="Click the image to view film details"
        size="small"
        position="left center"
        trigger={
          <Image
            src={
              wishListItem.movie.poster === "N/A"
                ? "/default-movie-poster.jpg"
                : wishListItem.movie.poster
            }
            wrapped
            ui={false}
            onError={i => (i.src = "/default-movie-poster.jpg")}
            onClick={() =>
              history.push(`/movies/${wishListItem.movie.imdb_id}`)
            }
          />
        }
      />
      <Card.Content>
        <Card.Header>
          <span className="movie-title">{wishListItem.movie.title} </span>
          <span className="movie-year"> &nbsp; {wishListItem.movie.year}</span>
        </Card.Header>
        <br />
        <Card.Meta>
          <span>
            <Popup
              content="View Details"
              size="small"
              position="left center"
              trigger={
                <Icon
                  name="eye"
                  size="large"
                  color="brown"
                  onClick={() =>
                    history.push(`/movies/${wishListItem.movie.imdb_id}`)
                  }
                />
              }
            />
          </span>
          <Popup
            content="Remove the film from current wishlist"
            size="small"
            position="left center"
            trigger={
              <Icon
                name="delete"
                size="big"
                inverted
                color="orange"
                onClick={() => {
                  show();
                }}
              />
            }
          />
          <Confirm
            className="confirm-message"
            open={open}
            header="DELETE WISHLIST"
            content="Are you sure that you want to delete this item from your wishlist?"
            cancelButton="No"
            confirmButton="Yes"
            onCancel={handleCancel}
            onConfirm={handleConfirm}
          />
        </Card.Meta>
      </Card.Content>
    </Card>
  );
};
