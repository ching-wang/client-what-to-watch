import React from "react";
import { Container, Message } from "semantic-ui-react";

export const NotFoundMessage = () => {
  return (
    <Container className="page-container">
      <Message negative>
        <Message.Header>We're sorry we can't find this film</Message.Header>
        <p>Please input other contents and try again</p>
      </Message>
    </Container>
  );
};
