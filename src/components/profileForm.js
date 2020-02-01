import React from "react";
import { Form, Button, Container } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

const ProfileForm = ({
  user,
  profileFormData,
  handleOnSubmit,
  handleOnChange
}) => {
  const history = useHistory();
  return (
    <Container>
      <div className="hero-container">
        <h1>Edit your profile</h1>
        <Form
          onSubmit={event => handleOnSubmit(event)}
          onChange={event => handleOnChange(event)}
          className="ui form"
        >
          <Form.Field>
            <label for="username">Username</label>
            <input
              type="text"
              name="username"
              placeholder="username"
              value={profileFormData.username}
            />
          </Form.Field>
          <Form.Field>
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={profileFormData.email}
            />
          </Form.Field>
          <br></br>
          <Button.Group>
            <Button onClick={() => history.push("/profile/")}>Cancel</Button>
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

export default ProfileForm;
