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
              autoComplete="username"
              placeholder={user ? user.username : ""}
              defaultValue={
                profileFormData.username || user ? user.username : ""
              }
            />
          </Form.Field>
          <Form.Field>
            <label for="avatar">Avatar</label>
            <input
              type="url"
              name="avatar"
              autoComplete="photo"
              placeholder="image link..."
              defaultValue={profileFormData.avatar || user ? user.avatar : ""}
            />
          </Form.Field>
          <Form.Field>
            <label for="bio">Bio</label>
            <input
              type="text"
              name="bio"
              placeholder={user ? user.bio : ""}
              defaultValue={profileFormData.bio || user ? user.bio : ""}
            />
          </Form.Field>
          <Form.Field>
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder={user ? user.email : ""}
              defaultValue={profileFormData.email || user ? user.email : ""}
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
