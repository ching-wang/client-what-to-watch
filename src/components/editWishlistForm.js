import React, { useState, useEffect } from "react";
import { Form, Button } from "semantic-ui-react";
import { useParams, useHistory } from "react-router-dom";
import API from "../adapters/API";

export const EditWishlistForm = () => {
  const [wishList, setWishList] = useState({
    name: "",
    image: "",
    description: ""
  });

  const { wishListId } = useParams();
  useEffect(() => {
    API.getWishList(wishListId).then(data => setWishList(data));
  }, [wishListId]);

  const handleOnChange = event => {
    setWishList({
      ...wishList,
      [event.target.name]: event.target.value
    });
  };

  let history = useHistory();
  const onWishlistChangeSubmit = event => {
    event.preventDefault();
    API.updateWishlist(wishListId, wishList).then(() =>
      history.push("/wishlists")
    );
  };

  return (
    <>
      <Form
        onSubmit={event => onWishlistChangeSubmit(event)}
        onChange={event => handleOnChange(event)}
        className="ui form"
        inverted
      >
        <Form.Field required>
          <label htmlFor="name">NAME</label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            placeholder="My lovely wishlist"
            defaultValue={wishList ? wishList.name : ""}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="image">COVER</label>
          <input
            type="url"
            id="image"
            name="image"
            autoComplete="image"
            placeholder="An image URL"
            defaultValue={wishList ? wishList.image : ""}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="description">DESCRIPTION</label>
          <input
            type="text"
            id="description"
            name="description"
            placeholder="An exciting list of films"
            defaultValue={wishList ? wishList.description : ""}
          />
        </Form.Field>
        <br></br>
        <Button.Group>
          <Button onClick={() => history.push("/wishlists")}>Cancel</Button>
          <Button.Or />
          <Button color="olive" type="submit">
            Save
          </Button>
        </Button.Group>
      </Form>
    </>
  );
};
