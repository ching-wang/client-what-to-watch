import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";

const MovieGroup = ({ user }) => {
  return (
    <>
      <h1>Your movieLists</h1>
      <br></br>
      <Card.Group>
        {null}{" "}
        <Card>
          <Image
            src="https://yada.org/wp-content/uploads/2018/11/just-in-the-time-for-the-weekend-our-list-of-5-classic-movies-for-a-relaxing-weekend-in.-these-movie.jpg"
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>Weekend Movie List</Card.Header>
            <Card.Meta>Created 2019</Card.Meta>
            <Card.Description>
              Movies that I wanted to watch with the person I love.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              Share with a firend
            </a>
            {/* <Button onClick={() => history.push(`/movies/${wishList.id}`)}>
              Go to wishlist
            </Button> */}
          </Card.Content>
        </Card>
      </Card.Group>
    </>
  );
};

export default MovieGroup;
