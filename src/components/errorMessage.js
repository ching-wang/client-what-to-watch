import React from "react";
import { Container, Message } from "semantic-ui-react";

export const ErrorMessage = ({ error, message }) => {
  return (
    <Container className="page-container">
      <Message negative>
        <Message.Header>{error}</Message.Header>
        <p>{message}</p>
      </Message>
    </Container>
  );
};
