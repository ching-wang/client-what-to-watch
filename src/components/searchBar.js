import React from "react";
import { Input } from "semantic-ui-react";

const SearchBar = () => {
  return (
    <>
      <Input
        size="huge"
        icon="search"
        placeholder="add a film to wishlist..."
      />
    </>
  );
};

export default SearchBar;
