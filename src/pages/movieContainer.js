import React from "react";
import MovieCard from "../components/movieCard";

const MovieContainer = ({ user, addToWishlist }) => {
  return <MovieCard user={user} addToWishlist={addToWishlist} />;
};

export default MovieContainer;
