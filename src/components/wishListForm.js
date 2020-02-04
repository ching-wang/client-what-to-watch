import React, { useState } from "react";
import { Form, Button, Container } from "semantic-ui-react";
import { useHistory, Link } from "react-router-dom";

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

  const history = useHistory();

  return (
    <Container>
      <div className="hero-container">
        <h1>Create a wishlist </h1>
        <Form
          onSubmit={event => handleOnSubmit(event, wishListFormData)}
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
              placeholder="name"
              defaultValue={null}
            />
          </Form.Field>
          <Form.Field>
            <label for="image">COVER</label>
            <input
              type="url"
              name="image"
              autoComplete="image"
              placeholder="image link..."
              defaultValue={null}
            />
          </Form.Field>
          <Form.Field>
            <label for="bio">DESCRIPTION</label>
            <input
              type="text"
              name="description"
              placeholder="Something about your wishlist"
              defaultValue={null}
            />
          </Form.Field>
          <br></br>
          <Button.Group>
            <Button>
              <Link to="/wishlists">Cancel</Link>
            </Button>
            <Button.Or />
            <Button positive type="submit">
              Save
            </Button>
          </Button.Group>
        </Form>
      </div>
    </Container>
  );
};

export default WishListForm;
