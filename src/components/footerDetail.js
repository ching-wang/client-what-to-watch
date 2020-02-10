import React from "react";
import { Container, Icon } from "semantic-ui-react";

export const FooterDetail = () => {
  return (
    <>
      {" "}
      <Container className="footer-container" textAlign="center">
        {/* <Grid divided inverted stackable>
          <Grid.Row> */}
        {/* <Grid.Column width={8}> */}
        {/* <Header inverted as="h4" content="Find Me" /> */}
        <Icon name="twitter" size="big" />
        <Icon name="facebook" size="big" />
        <Icon name="youtube" size="big" />
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
