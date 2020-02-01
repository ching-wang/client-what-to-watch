import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Image, Button, Container } from "semantic-ui-react";

const ProfileDetail = ({ user }) => {
  const history = useHistory();

  return (
    <Container>
      <div className="hero-container">
        <h1>My Profile Overview</h1>
        <Card>
          <Image
            src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>{user.username}</Card.Header>
            <Card.Meta>Joined in 2016</Card.Meta>
            <Card.Description>This is something about myself</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button
              className="ui red button"
              onClick={() => history.push("/profile/edit")}
            >
              Edit
            </Button>
            {/* <a>
              <Icon name="user" />
              10 Friends
            </a> */}
          </Card.Content>
        </Card>
      </div>
    </Container>
  );
};

export default ProfileDetail;
