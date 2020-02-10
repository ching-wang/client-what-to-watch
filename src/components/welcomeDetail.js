import React from "react";
import { Container, Header } from "semantic-ui-react";

export const WelcomeGreeting = ({ user }) => {
  return (
    <Container textAlign="center" text>
      {/* <h1>Hello {user.username}</h1> */}
      <Header
        as="h4"
        content="What do you want to watch?"
        // content={user.username}
        // content={`Hello ${user.username}What do you want to watch?`}
        inverted
        style={{
          fontSize: "6em",
          fontWeight: "normal",
          marginBottom: 0,
          marginTop: "0.8em"
        }}
      />
    </Container>
  );
};
