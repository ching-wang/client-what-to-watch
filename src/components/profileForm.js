import React from "react";
import { Image, Container, Form } from "semantic-ui-react";
import API from "../adapters/API";

const ProfileForm = ({ user, handleSubmit, handleOnChange }) => {
  return (
    <>
      <form
        onSubmit={handleSubmit}
        onChange={event => handleOnChange(event)}
        className="ui form"
      >
        <div className="filed">
          <div className="ui input">
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              defaultValue={user.email}
            />
          </div>
        </div>
        <div className="filed">
          <div className="ui input">
            <label for="email">password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              defaultValue={null}
            />
          </div>
        </div>
        <input className="ui black button" type="submit" value="Submit" />
      </form>
    </>
  );
};

export default ProfileForm;
