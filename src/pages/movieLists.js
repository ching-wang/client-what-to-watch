import React from "react";
import MovieGroup from "../components/movieGroup";
import { Container } from "semantic-ui-react";

const MovieLists = () => {
  return (
    <Container>
      <div className="page-container">
        <MovieGroup />
      </div>
    </Container>
  );
};

export default MovieLists;
