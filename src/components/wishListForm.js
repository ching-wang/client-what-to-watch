import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

const WishListForm = ({ user, handleOnSubmit }) => {
  const [wishListFormData, setWishListFormData] = useState({
    name: "",
    image: "",
    description: ""
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
        onSubmit={event => handleOnSubmit(event, wishListFormData)}
        onChange={event => handleOnChange(event)}
        className="ui form"
        inverted
      >
        <Form.Field required>
          <label for="name">NAME</label>
          <input
            type="text"
            name="name"
            autoComplete="name"
            placeholder="name"
            defaultValue={wishListFormData.name}
          />
        </Form.Field>
        <Form.Field>
          <label for="image">COVER</label>
          <input
            type="url"
            name="image"
            autoComplete="image"
            placeholder="image link..."
            defaultValue={wishListFormData.image}
          />
        </Form.Field>
        <Form.Field>
          <label for="bio">DESCRIPTION</label>
          <input
            type="text"
            name="description"
            placeholder="Something about your wishlist"
            defaultValue={wishListFormData.description}
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

export default WishListForm;
