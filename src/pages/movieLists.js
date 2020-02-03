import React from "react";
import MovieGroup from "../components/movieGroup";
import { Container } from "semantic-ui-react";

const MovieLists = ({ user }) => {
  const wishLists = user.wish_lists || [];

  const renderMovieList = wishLists =>
    wishLists.map(wishlist => {
      return <MovieGroup wishlist={wishlist} />;
    });

  return (
    <Container>
      <div className="page-container">
        <h1>
          You have {wishLists.length} movies in your {wishLists.name} list.
        </h1>
        {renderMovieList(wishLists)}
      </div>
    </Container>
  );
};

export default MovieLists;

// {for (const wishlist in wishLists) }
