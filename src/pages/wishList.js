import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { WishListItem } from "../components/WishListItem";
import { Container, Card } from "semantic-ui-react";
import API from "../adapters/API";

const WishList = () => {
  const { wishListId } = useParams();
  const [wishList, setWishList] = useState({});

  useEffect(() => {
    API.getWishList(wishListId).then(res => {
      setWishList(res);
    });
  }, [wishListId]);

  function deleteWishlistItem(wishlistitemId) {
    wishList.filter(w => w.wish_list_items.id != wishlistitemId);
  }
  // function filteredWishlistItem() {
  //   deleteWishlistItem();
  // }
  // function deleteWishlist(wishlistId) {
  //   API.deleteWishlist(wishlistId).then(() => {
  //     setWishLists(wishLists.filter(wl => wl.id !== wishlistId));
  //   });
  // }

  return wishList.wish_list_items ? (
    <Container>
      <div className="page-container">
        <h1>{wishList.name}</h1>
        <h2>
          {" "}
          You have &nbsp; {wishList.wish_list_items.length}
          &nbsp;{wishList.wish_list_items.length > 1 ? "movies" : "movie"}
        </h2>
        <Card.Group
          centered={true}
          itemsPerRow={Math.max(
            Math.min(wishList.wish_list_items.length, 5),
            3
          )}
        >
          {wishList.wish_list_items ? (
            wishList.wish_list_items.map(wli => (
              <WishListItem
                key={wli.id}
                wishListItem={wli}
                handleDeleteWishlistItem={deleteWishlistItem}
              />
            ))
          ) : (
            <>
              <h1>Sorry, no wishList found</h1>
            </>
          )}
        </Card.Group>
      </div>
    </Container>
  ) : (
    <></>
  );
};

export default WishList;
