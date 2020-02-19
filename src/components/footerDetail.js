import React from "react";
import { Container, Icon } from "semantic-ui-react";

export const FooterDetail = () => {
  return (
    <>
      {" "}
      <Container className="footer-container" textAlign="center">
        <Icon name="github" size="big" />
        &nbsp;
        <Icon name="facebook" size="big" />
        &nbsp;
        <Icon name="youtube" size="big" />
        &nbsp;
        <Icon name="instagram" size="big" />
        <br />
        <span> Created by Qing Wang</span>
      </Container>
    </>
  );
};
