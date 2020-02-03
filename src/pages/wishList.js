import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { WishListItem } from "../components/WishListItem";
import { Container, Card } from "semantic-ui-react";
import API from "../adapters/API";

const WishList = () => {
  const { wishListId } = useParams();
  const [wishList, setWishList] = useState({});

  useEffect(() => {
    API.getWishList(wishListId).then(res => setWishList(res));
  }, []);

  return wishList.wish_list_items ? (
    <Container>
      <div className="page-container">
        <h1>{wishList.name}</h1>
        <h2>
          {wishList.wish_list_items.length}
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
              <WishListItem key={wli.id} wishListItem={wli} />
            ))
          ) : (
            <></>
          )}
        </Card.Group>
      </div>
    </Container>
  ) : (
    <></>
  );
};

export default WishList;
