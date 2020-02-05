import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {
  Container,
  Card,
  Image,
  Dropdown,
  Grid,
  Button,
  Icon
} from "semantic-ui-react";
import API from "../adapters/API";

const MovieCard = ({ user }) => {
  const { imdbId } = useParams();

  const [movie, setMovie] = useState({});
  useEffect(() => {
    API.getMovie(imdbId).then(res => setMovie(res));
  }, []);

  const [wishListItems, setWishListItems] = useState([]);
  useEffect(() => {
    API.getUserWishListItems().then(res => setWishListItems(res));
  }, []);

  const findWishListItem = wishListId => {
    return wishListItems.find(wli => {
      return (
        movie &&
        wli.wish_list.id === wishListId &&
        wli.movie.imdb_id === movie.imdbID
      );
    });
  };

  const toggleInWishlist = (wishListId, imdbID) => {
    const wishListItem = findWishListItem(wishListId);
    if (wishListItem) {
      // console.log("Removing wish list item", { wishListId, imdbID });
      API.deleteFromWishList(wishListItem.id).then(() => {
        setWishListItems(
          wishListItems.filter(wli => wli.id !== wishListItem.id)
        );
      });
      return;
    }

    // console.log("Adding wish list item", { wishListId, imdbID });
    API.addToWishList(wishListId, imdbID).then(res => {
      setWishListItems([...wishListItems, res]);
    });
  };

  return (
    <Container className="page-container">
      <Grid>
        <Grid.Row>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={5}>
            <img className="poster" src={movie.Poster} wrapped ui={false} />
          </Grid.Column>
          <Grid.Column width={7}>
            <Card.Content>
              <medium>Genre:</medium> {movie.Genre}
            </Card.Content>
            <br></br>
            <h1>{movie.Title}</h1>
            <Card.Content>
              <medium>
                <strong>Director:</strong>
              </medium>
              {movie.Director}
            </Card.Content>
            <Card.Content>
              <medium>
                <strong>Actors:</strong>
              </medium>
              {movie.Actors}
            </Card.Content>
            <br></br>
            <Card.Description>Plot: {movie.Plot}</Card.Description>
            <br></br>
            <Dropdown
              text="Add to Wishlist"
              icon="add"
              floating
              labeled
              button
              className="icon"
            >
              <Dropdown.Menu>
                {!user ? (
                  <Card.Description>
                    Please login in to add the film
                  </Card.Description>
                ) : (
                  <>
                    <Dropdown.Header content="Choose a wishList to add to" />
                    {user.wish_lists.map(wishlist => (
                      <Dropdown.Item
                        key={wishlist.id}
                        name={wishlist.name}
                        text={wishlist.name}
                        image={{ src: wishlist.image }}
                        icon={findWishListItem(wishlist.id) ? "check" : ""}
                        onClick={() =>
                          toggleInWishlist(wishlist.id, movie.imdbID)
                        }
                      />
                    ))}
                  </>
                )}
              </Dropdown.Menu>
            </Dropdown>
            <Icon
              name="share alternate square"
              inverted
              color="orange"
              size="big"
            />
          </Grid.Column>
          <Grid.Column width={1}></Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default MovieCard;
