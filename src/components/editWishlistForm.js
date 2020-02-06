import React, { useState } from "react";
import { Form, Button, Container } from "semantic-ui-react";
import { useHistory, Link } from "react-router-dom";
import API from "../adapters/API";

export const EditWishlistForm = ({
  user,
  wishList,
  onWishlistChangeSubmit
}) => {
  const [wishListFormData, setWishListFormData] = useState({
    name: wishList.name,
    image: wishList.image,
    description: wishList.description
  });

  const handleOnChange = event => {
    setWishListFormData({
      ...wishListFormData,
      [event.target.name]: event.target.value
    });
  };

  let history = useHistory();

  return (
    <>
      <Form
        onSubmit={event => onWishlistChangeSubmit(event, wishList.id, wishListFormData)}
        onChange={event => handleOnChange(event)}
        className="ui form"
        inverted
      >
        <Form.Field>
          <label for="name">NAME</label>
          <input
            type="text"
            name="name"
            autoComplete="name"
            placeholder={wishList ? wishList.name : ""}
            defaultValue={
              wishListFormData.name || wishList ? wishList.name : ""
            }
          />
        </Form.Field>
        <Form.Field>
          <label for="image">COVER</label>
          <input
            type="url"
            name="image"
            autoComplete="image"
            placeholder={wishList ? wishList.image : ""}
            defaultValue={
              wishListFormData.image || wishList ? wishList.image : ""
            }
          />
        </Form.Field>
        <Form.Field>
          <label for="bio">DESCRIPTION</label>
          <input
            type="text"
            name="description"
            placeholder={wishList ? wishList.description : ""}
            defaultValue={
              wishListFormData.description || wishList
                ? wishList.description
                : ""
            }
          />
        </Form.Field>
        <br></br>
        <Button.Group>
          <Button onClick={() => history.push("/wishlists")}>Cancel</Button>
          <Button.Or />
          <Button positive type="submit">
            Save
          </Button>
        </Button.Group>
      </Form>
    </>
  );
};
