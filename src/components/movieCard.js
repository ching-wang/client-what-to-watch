import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {
  Container,
  Card,
  Dropdown,
  Grid,
  Icon,
  Popup,
  Image
} from "semantic-ui-react";
import API from "../adapters/API";

const MovieCard = ({ user }) => {
  const { imdbId } = useParams();

  const [movie, setMovie] = useState({});
  useEffect(() => {
    API.getMovie(imdbId).then(res => setMovie(res));
  }, []);

  const [wishslists, setWishlists] = useState([]);
  useEffect(() => {
    API.getUserWishLists().then(res => setWishlists(res));
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

  console.log(movie);

  return (
    <Container className="page-container">
      <Grid>
        <Grid.Row>
          <Grid.Column width={6}>
            <Image
              className="poster"
              style={{ margin: "auto", width: "100%", height: "auto" }}
              alt={movie.Title}
              src={
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : window.location.origin + `/default-movie-poster.jpg`
              }
            />
          </Grid.Column>
          <Grid.Column width={10}>
            <Card.Content>
              <strong>Genre:</strong> {movie.Genre}
            </Card.Content>
            <h1>{movie.Title}</h1>
            <Card.Content>
              <strong>Director: </strong>
              {movie.Director}
            </Card.Content>
            <Card.Content>
              <strong>Actors: </strong>
              {movie.Actors}
            </Card.Content>
            <Card.Content>
              <strong>IMDB Rating: </strong>
              <span className="rating">{movie.imdbRating}</span>
            </Card.Content>
            <Card.Content>
              <strong>Language: </strong>
              <span>{movie.Language}</span>
            </Card.Content>
            <Card.Content>
              <strong>Country: </strong>
              <span>{movie.Country}</span>
            </Card.Content>
            <Card.Content>
              <strong>Runtime: </strong>
              <span>{movie.Runtime}</span>
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
                {
                  <>
                    <Dropdown.Header content="Choose a wishList to add to" />
                    {wishslists.map(wishlist => (
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
                }
              </Dropdown.Menu>
            </Dropdown>
            <Popup
              content="Share this film"
              size="small"
              position="bottom right"
              trigger={
                <Icon
                  name="share alternate square"
                  size="big"
                  color="orange"
                  onClick={null}
                />
              }
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

MovieCard.defaultProps = {
  Poster: "http://i.imgur.com/bJw8ndW.png"
};

export default MovieCard;
