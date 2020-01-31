import React, { useState, useEffect } from "react";
import SearchBar from "../components/searchBar";
import { Image, Container, Form } from "semantic-ui-react";
import ProfileForm from "./profileForm";

const ProfileDetail = ({ user, handleSubmit, handleOnChange }) => {
  console.log(user.username);
  const wishLists = user.wish_lists;

  const [clickEditForm, setClickEditForm] = useState(false);

  const editProfileForm = () => {
    setClickEditForm(true);
  };

  return (
    <>
      <Container>
        {!clickEditForm ? (
          <>
            <p>Hello {user.username}</p>
            <h1>Profile</h1>
            <img
              class="ui medium circular image"
              src="src/images/qing.jpg"
              alt="profile-image"
            />
            ;{/* <SearchBar /> */}
            <div className="filed">
              <div className="ui input">
                <label for="username">Name</label>
                <input
                  type="username"
                  name="username"
                  placeholder="Username"
                  defaultValue={user.username}
                />
              </div>
            </div>
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
            <button className="ui red button" onClick={() => editProfileForm()}>
              Edit Profile
            </button>{" "}
          </>
        ) : (
          <ProfileForm user={user} />
        )}
      </Container>
    </>
  );
};

export default ProfileDetail;
