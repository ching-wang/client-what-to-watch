import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "semantic-ui-react";

const ProfileDetail = ({ user }) => {
  const history = useHistory();

  return (
    <>
      <div className="hero-container">
        <h1>Welcome {user.username}</h1>
        <h3>Username: {user.username}</h3>
        <h3>Email: {user.email}</h3>
        <Button
          className="ui red button"
          onClick={() => history.push("/profile/edit")}
        >
          Edit
        </Button>{" "}
      </div>
    </>
  );
};

export default ProfileDetail;
