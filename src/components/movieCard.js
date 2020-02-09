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
  }, [imdbId]);

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
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={6}>
            <Card>
              <Image
                className="poster"
                alt={movie.Title}
                src={
                  movie.Poster !== "N/A"
                    ? movie.Poster
                    : window.location.origin + `/default-movie-poster.jpg`
                }
                wrapped
                ui={false}
              />
            </Card>
          </Grid.Column>
          <Grid.Column width={7}>
            <Card.Content>
              <medium>Genre:</medium> {movie.Genre}
            </Card.Content>
            <br></br>
            <h1>{movie.Title}</h1>
            <Card.Content>
              <medium>
                <strong>Director: </strong>
              </medium>
              {movie.Director}
            </Card.Content>
            <Card.Content>
              <medium>
                <strong>Actors: </strong>
              </medium>
              {movie.Actors}
            </Card.Content>
            <Card.Content>
              <medium>
                <strong>IMDB Rating: </strong>
              </medium>
              <span className="rating">{movie.imdbRating}</span>
            </Card.Content>
            <Card.Content>
              <medium>
                <strong>Language: </strong>
              </medium>
              <span>{movie.Language}</span>
            </Card.Content>
            <Card.Content>
              <medium>
                <strong>Country: </strong>
              </medium>
              <span>{movie.Country}</span>
            </Card.Content>
            <Card.Content>
              <medium>
                <strong>Runtime: </strong>
              </medium>
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
            <Popup
              content="Share this film"
              size="medium"
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
          <Grid.Column width={2}></Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

MovieCard.defaultProps = {
  Poster: "http://i.imgur.com/bJw8ndW.png"
};

export default MovieCard;
