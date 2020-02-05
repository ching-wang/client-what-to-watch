import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Image, Button, Container } from "semantic-ui-react";

const ProfileDetail = ({ user, onDeleteAccount }) => {
  const history = useHistory();

  return (
    <Container>
      <div className="hero-container">
        <h1>My Profile Overview</h1>
        <Card>
          <Image src={user.avatar} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{user.username}</Card.Header>
            <Card.Meta>Joined in 2016</Card.Meta>
            <Card.Description>{user.bio}</Card.Description>
          </Card.Content>
          <Button
            className="ui yellow button"
            onClick={() => history.push("/profile/edit")}
          >
            EDIT PROFILE
          </Button>
          <Button
            className="ui orange button"
            onClick={() => onDeleteAccount(user.id)}
          >
            DELETE ACCOUNT
          </Button>
        </Card>
      </div>
    </Container>
  );
};

export default ProfileDetail;
