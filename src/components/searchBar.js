import React from "react";
import { Input } from "semantic-ui-react";

const SearchBar = () => {
  return (
    <>
      {/* <div class="ui big icon input">
        <input type="text" placeholder="Add a film to your wishlist..." />
        <i class="search icon"></i>
      </div> */}
      <Input
        size="huge"
        icon="search"
        placeholder="add a film to wishlist..."
      />
    </>
  );
};

export default SearchBar;
