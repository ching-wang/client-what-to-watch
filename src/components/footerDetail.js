import React from "react";
import { Container, Icon } from "semantic-ui-react";

export const FooterDetail = () => {
  return (
    <>
      {" "}
      <Container className="footer-container">
        {/* <Grid divided inverted stackable>
          <Grid.Row> */}
        {/* <Grid.Column width={8}> */}
        {/* <Header inverted as="h4" content="Find Me" /> */}
        <Icon name="twitter" size="big" />
        &nbsp;
        <Icon name="facebook" size="big" />
        &nbsp;
        <Icon name="youtube" size="big" />
        &nbsp;
        <Icon name="instagram" size="big" />
        {/* </Grid.Column> */}
        {/* <Grid.Column width={8}>
              <Header as="h4" inverted>
                About
              </Header>
              <p>Add a film to your wishlist</p>
            </Grid.Column> */}
        {/* </Grid.Row>
        </Grid> */}
      </Container>
    </>
  );
};
