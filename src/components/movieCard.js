import { useParams, useLocation, NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Clipboard from "react-clipboard.js";

import {
  Container,
  Card,
  Dropdown,
  Grid,
  Icon,
  Image,
  Message,
  Modal,
  Header,
  Input,
  Button
} from "semantic-ui-react";
import API from "../adapters/API";

const MovieCard = ({ user }) => {
  const { imdbId } = useParams();

  const onSuccess = () => {
    return window.alert("Copied!");
  };

  const getText = () => {
    return currentPath;
  };

  const basedURL =
    "http://localhost:https://what-to-watch-tonight.herokuapp.com/api/v1";

  const location = useLocation();
  const currentPath = basedURL + location.pathname;

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
      API.deleteFromWishList(wishListItem.id).then(() => {
        setWishListItems(
          wishListItems.filter(wli => wli.id !== wishListItem.id)
        );
      });
      return;
    }

    API.addToWishList(wishListId, imdbID).then(res => {
      setWishListItems([...wishListItems, res]);
    });
  };

  const defaultImage = "/default-cover.jpg";

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
                  : "/default-movie-poster.jpg"
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
                    {user ? (
                      <>
                        <Dropdown.Header content="Choose a wishList to add to" />
                        {wishslists.map(wishlist => (
                          <Dropdown.Item
                            key={wishlist.id}
                            name={wishlist.name}
                            text={wishlist.name}
                            image={{
                              src: wishlist.image
                                ? wishlist.image
                                : defaultImage,
                              style: {
                                "max-width": "28px",
                                height: "auto"
                              }
                            }}
                            icon={findWishListItem(wishlist.id) ? "check" : ""}
                            onClick={() =>
                              toggleInWishlist(wishlist.id, movie.imdbID)
                            }
                          />
                        ))}{" "}
                      </>
                    ) : (
                      <>
                        <Message
                          error
                          header="Error"
                          content="You must log-in to add it to your wishlist"
                        />
                      </>
                    )}
                  </>
                }
              </Dropdown.Menu>
            </Dropdown>

            <Modal
              size="tiny"
              trigger={
                <Icon name="share alternate square" size="big" color="orange" />
              }
            >
              <Modal.Header>Share this film</Modal.Header>
              <Modal.Content>
                <Modal.Description>
                  <Clipboard option-text={getText} onSuccess={onSuccess}>
                    <Icon name="copy" size="big" color="orange" />
                  </Clipboard>
                  <Input
                    type="url"
                    name="path"
                    placeholder="path"
                    disabled={true}
                    style={{ width: "25em", "max-width": "80%" }}
                    defaultValue={window.location}
                  />

                  {/* <FacebookIcon url={currentPath} size={30} /> */}
                </Modal.Description>
              </Modal.Content>
            </Modal>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default MovieCard;
