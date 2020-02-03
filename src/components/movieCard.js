import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {
  Container,
  Card,
  Image,
  Icon,
  Dropdown,
  Grid
} from "semantic-ui-react";
import API from "../adapters/API";

const MovieCard = ({ user, addToWishlist }) => {
  const { imdbId } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    API.getMovie(imdbId).then(res => setMovie(res));
  }, []);

  // // let wishlist = [];
  // // wishlist.push(user.wish_lists);

  // // console.log(wishlist);
  // // wishlists.map(wishlist => {<Dropdown.Item key={wishlist.value} {...wishlist} />}
  // //   )
  // // const renderWishLists = (user.wishLists) => {

  // // }

  // const wishlistOption = [
  //   {
  //     key: "Weekend Wishlist",
  //     text: "Weekend Wish List",
  //     name: "Weekend Wish List",
  //     image: {
  //       src:
  //         "https://yada.org/wp-content/uploads/2018/11/just-in-the-time-for-the-weekend-our-list-of-5-classic-movies-for-a-relaxing-weekend-in.-these-movie.jpg"
  //     }
  //   },
  //   {
  //     key: "Christmas Wishlist",
  //     text: "Christmas Wishlist",
  //     value: "Christmas Wishlist",
  //     image: {
  //       src:
  //         "http://www.mrcleverman.com/wp-content/uploads/2019/09/mr_cleverman_color_christmas_poster_merry_christmas_tree.jpg"
  //     }
  //   },
  //   {
  //     key: "Stevie Feliciano",
  //     text: "Stevie Feliciano",
  //     value: "Stevie Feliciano",
  //     image: {
  //       src:
  //         "https://d2k7k7fv4ro731.cloudfront.net/media/catalog/product/cache/x800/111/49/111-49-101P.jpg"
  //     }
  //   }
  // ];

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
