import React from "react";
import { Container, Icon } from "semantic-ui-react";

export const FooterDetail = () => {
  return (
    <>
      {" "}
      <Container className="footer-container" textAlign="center">
        <a className="footer-link" href="https://github.com/ching-wang">
          <Icon name="github" size="big" />
        </a>
        &nbsp;
        <a className="footer-link" href="https://www.linkedin.com/in/ching-wang/">
          <Icon name="linkedin" size="big" />
        </a>
        &nbsp;
        <a className="footer-link" href="https://ching-wang.github.io/">
          <Icon name="blogger" size="big" />
        </a>
        <p style={{ marginTop: "3px" }}>Created with love by Qing Wang</p>
      </Container>
    </>
  );
};
