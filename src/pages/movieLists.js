import React from "react";
import MovieGroup from "../components/movieGroup";
import { Container } from "semantic-ui-react";

const MovieLists = ({ user }) => {
  const renderMovieList = wishLists =>
    wishLists.map(wishlist => {
      return <MovieGroup wishlist={wishlist} />;
    });

  return (
    <Container>
      {user ? (
        <div className="page-container">
          <h1>
            You have {user.wish_lists.length} movies in your{" "}
            {user.wish_lists.name} list.
          </h1>
          {renderMovieList(user.wish_lists)}
        </div>
      ) : (
        <h2>I'm waiting</h2>
      )}
    </Container>
  );
};

export default MovieLists;

// {for (const wishlist in wishLists) }
