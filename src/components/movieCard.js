import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Container, Card, Image, Icon } from "semantic-ui-react";
import API from "../adapters/API";

const MovieCard = () => {
  const { imdbId } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    API.getMovie(imdbId).then(res => setMovie(res));
  }, []);
  return (
    <Container>
      <Card.Group centered={true}>
        <Card>
          <Image src={movie.Poster} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{movie.Title}</Card.Header>
            <Card.Meta>{movie.Year}</Card.Meta>
            <Card.Content>
              <small>Director:</small> {movie.Director}
            </Card.Content>
            <Card.Description>{movie.Plot}</Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
    </Container>
  );
};

export default MovieCard;
