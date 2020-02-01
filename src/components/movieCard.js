import React from "react";
import { Card, Image, Icon, Container } from "semantic-ui-react";

const MovieCard = props => {
  return (
    <>
      <Card.Group>
        {null}{" "}
        <Card>
          <Image
            src="https://m.media-amazon.com/images/M/MV5BMGI4NjcwMzctM2FmNy00ZjQ0LTk0MTgtMWI1ODA2OTAyOTY2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>I Lost My Body</Card.Header>
            <Card.Meta>Joined in 2016</Card.Meta>
            <Card.Description>
              Daniel is a comedian living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              10 Friends
            </a>
          </Card.Content>
        </Card>
      </Card.Group>
    </>
  );
};

export default MovieCard;
