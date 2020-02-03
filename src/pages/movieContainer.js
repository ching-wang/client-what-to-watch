import React from "react";
import MovieGroup from "../components/movieGroup";
import { Container } from "semantic-ui-react";

const MovieContainer = ({ user }) => {
  const renderMovieList = wishLists =>
    wishLists.map(wishlist => {
      return <MovieGroup wishlist={wishlist} />;
    });

  // if (user.wish_lists < 1)
  //   return <h1> It seems that you don't have a wishlist yet </h1>;

  return (
    <Container>
      {user ? (
        <div className="page-container">
          <h1>
            You have {user.wish_lists.length} movies in your
            {user.wish_lists.name}
            {user.wish_lists.name} list.
          </h1>
          {renderMovieList(user.wish_lists)}
        </div>
      ) : (
        <h2>The page is loading, please wait...</h2>
      )}
    </Container>
  );
};

export default MovieContainer;

// {for (const wishlist in wishLists) }
