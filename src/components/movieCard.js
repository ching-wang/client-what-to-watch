import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Container, Card, Image, Dropdown, Grid } from "semantic-ui-react";
import API from "../adapters/API";

const MovieCard = ({ user, addToWishlist }) => {
  const { imdbId } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    API.getMovie(imdbId).then(res => setMovie(res));
  }, []);

  return (
    <Container className="page-container">
      <Grid>
        <Grid.Row>
          <Image src={movie.Poster} wrapped ui={false} />
          <Grid.Column width={8}>
            <Card.Content>
              <medium>Genre:</medium> {movie.Genre}
            </Card.Content>
            <br></br>
            <h1>{movie.Title}</h1>
            <Card.Content>
              <medium>
                <strong>Director:</strong>
              </medium>{" "}
              {movie.Director}
            </Card.Content>
            <Card.Content>
              <medium>
                <strong>Actors:</strong>
              </medium>{" "}
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
                        onClick={() => addToWishlist(wishlist.id, movie.imdbID)}
                      />
                    ))}
                  </>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default MovieCard;
