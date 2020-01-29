import React from "react";

const searchBar = () => {
  return (
    <>
      <div class="ui big icon input">
        <input type="text" placeholder="Add a film to your wishlist..." />
        <i class="search icon"></i>
      </div>
    </>
  );
};

export default searchBar;
