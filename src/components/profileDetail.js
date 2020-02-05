import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Image, Button, Container, Icon, Popup } from "semantic-ui-react";

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
            <br></br>
            <Card.Meta>
              <Popup
                content="Edit your profile"
                size="medium"
                position="left center"
                trigger={
                  <Icon
                    name="edit outline"
                    size="large"
                    color="orange"
                    onClick={() => history.push("/profile/edit")}
                  />
                }
              />
              <Popup
                content="Delete your account"
                size="medium"
                position="left center"
                trigger={
                  <Icon
                    name="user delete"
                    size="large"
                    color="orange"
                    onClick={() => onDeleteAccount(user.id)}
                  />
                }
              />
            </Card.Meta>
          </Card.Content>
        </Card>
      </div>
    </Container>
  );
};

export default ProfileDetail;
