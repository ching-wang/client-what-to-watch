import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Card,
  Image,
  Container,
  Icon,
  Popup,
  Confirm
} from "semantic-ui-react";

const ProfileDetail = ({ user, onDeleteAccount }) => {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState("Your account has been deleted");

  const handleConfirm = () => {
    setOpen(false);
    setResult("confirmed");
    onDeleteAccount(user.id);
  };

  const handleCancel = () => {
    setOpen(false);
    setResult("cancelled");
  };

  const show = () => {
    setOpen(true);
  };

  const defaultImage =
    "https://semantic-ui.com/images/wireframe/square-image.png";
  return (
    <Container text>
      <div className="hero-container-profile">
        <h1>My Profile Overview</h1>
        <Card>
          <Image
            onError={i => (i.target.src = defaultImage)}
            alt="profile avatar"
            src={user.avatar ? user.avatar : defaultImage}
            wrapped
            ui={false}
            rounded
          />
          <Card.Content>
            <Card.Header>{user.username}</Card.Header>
            <Card.Meta>Joined in 2020</Card.Meta>
            <Card.Description>
              {user.bio
                ? user.bio
                : "I haven't got a chance to write anything yet"}
            </Card.Description>
            <br></br>
            <Card.Meta textAlign="right">
              <Popup
                content="Edit your profile"
                size="small"
                position="bottom center"
                trigger={
                  <Icon
                    name="edit outline"
                    size="large"
                    color="orange"
                    position="right center"
                    onClick={() => history.push("/profile/edit")}
                  />
                }
              />
              &nbsp; &nbsp;
              <>
                <Popup
                  content="Delete your account"
                  size="small"
                  position="bottom center"
                  trigger={
                    <Icon
                      name="user delete"
                      size="large"
                      color="orange"
                      onClick={() => {
                        show();
                      }}
                    />
                  }
                />
                <Confirm
                  open={open}
                  className="confirm-message"
                  header="DELETE ACCOUNT"
                  content="Are you sure that you want to delete your account?"
                  cancelButton="No, I would like to stay"
                  confirmButton="Yes, please go ahead"
                  onCancel={handleCancel}
                  onConfirm={handleConfirm}
                />
              </>
            </Card.Meta>
          </Card.Content>
        </Card>
      </div>
    </Container>
  );
};

export default ProfileDetail;
