import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { WishListItem } from "../components/WishListItem";
import { Container, Card } from "semantic-ui-react";
import API from "../adapters/API";

const WishList = () => {
  const { wishListId } = useParams();
  const [wishList, setWishList] = useState({});
  const [wishListItems, setWishListItems] = useState([]);

  useEffect(() => {
    API.getWishList(wishListId).then(res => {
      setWishList(res);
      setWishListItems(res.wish_list_items);
    });
  }, [wishListId]);

  function deleteWishlistItem(wishlistitemId) {
    API.deleteFromWishList(wishlistitemId).then(() => {
      setWishListItems(wishListItems.filter(wli => wli.id !== wishlistitemId));
    });
  }

  return wishListItems ? (
    <Container>
      <div className="page-container">
        <>
          <h2>
            You have &nbsp;{wishListItems.length}
            &nbsp;
            {wishListItems.length === 0 || wishListItems.length > 1
              ? "movies"
              : "movie"}
            &nbsp;in <span className="wishlist-name">{wishList.name}</span>
          </h2>

          {wishListItems.length > 1 ? (
            <h3>search a film to add to the list</h3>
          ) : (
            ""
          )}
        </>
        <Card.Group
          centered={true}
          itemsPerRow={Math.max(Math.min(wishListItems.length, 5), 3)}
        >
          {wishListItems ? (
            wishListItems.map(wli => (
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
