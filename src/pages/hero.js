import React from "react";
import { Header, Container, Card } from "semantic-ui-react";
import SearchBar from "../components/searchBar";

const Hero = user => {
  return (
    <>
      <Container textAlign="center" text>
        <h1 className="hero-header">What do you want to watch ?</h1>
        <SearchBar />

        <Card.Description className="popular">POPULAR</Card.Description>
        <hr />
        <Card.Group itemsPerRow={4}>
          <Card
            image={
              "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
            }
            href={"https://wattowatch.netlify.com/movies/tt7286456"}
          />
          <Card
            image={
              "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg"
            }
            href={"https://wattowatch.netlify.com/movies/tt4154664"}
          />
          <Card
            image={
              "https://m.media-amazon.com/images/M/MV5BZjU0Yzk2MzEtMjAzYy00MzY0LTg2YmItM2RkNzdkY2ZhN2JkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg"
            }
            href={"https://wattowatch.netlify.com/movies/tt2584384"}
          />
          <Card
            image={
              "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg"
            }
            href={"https://wattowatch.netlify.com/movies/tt6105098"}
          />
        </Card.Group>
      </Container>
    </>
  );
};

export default Hero;
