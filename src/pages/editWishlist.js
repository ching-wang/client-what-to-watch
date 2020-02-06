import React, { useState, useEffect } from "react";
import { EditWishlistForm } from "../components/editWishlistForm";
import { Container } from "semantic-ui-react";
import API from "../adapters/API";

const EditWishlist = props => {
  // const params = useParams();
  // console.log(props.match.params.id);

  const [wishList, setWishList] = useState({
    name: "",
    image: "",
    description: ""
  });

  const wishlistobj = props.match.params.id;

  useEffect(() => {
    API.getWishList(wishlistobj).then(data => setWishList(data));
  }, []);

  return (
    <>
      <Container>
        <div className="hero-container">
          <h1>Edit wishlist </h1>
          <EditWishlistForm
            onWishlistChangeSubmit={props.handleUpdateWishListSubmit}
            wishList={wishList}
          />
        </div>
      </Container>
    </>
  );
};

export default EditWishlist;
