import React from "react";
import { Card, Image, Icon, Container } from "semantic-ui-react";

const MovieGroup = ({ user, wishlist }) => {
  return (
    <Container>
      <div className="page-container">
        <Card>
          <Image
            src="https://m.media-amazon.com/images/M/MV5BMGI4NjcwMzctM2FmNy00ZjQ0LTk0MTgtMWI1ODA2OTAyOTY2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>Movie Title </Card.Header>
            <Card.Meta>Movie Description</Card.Meta>
            <Card.Description>Movie Plot</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="share alternate" />
              Share with a firend
            </a>
            {/* <Button onClick={() => history.push(`/movies/${wishList.id}`)}>
              Go to wishlist
            </Button> */}
          </Card.Content>
        </Card>
      </div>
    </Container>
  );
};

export default MovieGroup;
