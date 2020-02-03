import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Container, Card, Image, Icon, Dropdown } from "semantic-ui-react";
import API from "../adapters/API";

const MovieCard = ({ user }) => {
  const { imdbId } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    API.getMovie(imdbId).then(res => setMovie(res));
  }, []);

  // let wishlist = [];
  // wishlist.push(user.wish_lists);

  // console.log(wishlist);
  // wishlists.map(wishlist => {<Dropdown.Item key={wishlist.value} {...wishlist} />}
  //   )
  // const renderWishLists = (user.wishLists) => {

  // }

  const wishlistOption = [
    {
      key: "Jenny Hess",
      text: "Jenny Hess",
      value: "Jenny Hess",
      image: { avatar: true, src: "/images/avatar/small/jenny.jpg" }
    },
    {
      key: "Elliot Fu",
      text: "Elliot Fu",
      value: "Elliot Fu",
      image: { avatar: true, src: "/images/avatar/small/elliot.jpg" }
    },
    {
      key: "Stevie Feliciano",
      text: "Stevie Feliciano",
      value: "Stevie Feliciano",
      image: { avatar: true, src: "/images/avatar/small/stevie.jpg" }
    }
  ];

  return (
    <Container>
      <Card.Group centered={true}>
        <Card>
          <Image src={movie.Poster} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{movie.Title}</Card.Header>
            <Card.Meta>{movie.Year}</Card.Meta>
            <Card.Content>
              <small>Director:</small> {movie.Director}
            </Card.Content>
            <Card.Description>{movie.Plot}</Card.Description>
          </Card.Content>
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
                  {wishlistOption.map(w => (
                    <Dropdown.Item key={w.value} {...w} />
                  ))}
                </>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Card>
      </Card.Group>
    </Container>
  );
};

export default MovieCard;
