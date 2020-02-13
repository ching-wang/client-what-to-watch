import React from "react";
import { Header, Container, Card, CardHeader } from "semantic-ui-react";
import SearchBar from "../components/searchBar";

const Hero = user => {
  return (
    <>
      <Container textAlign="center" text>
        <Header
          as="h4"
          content="What do you want to watch?"
          inverted
          style={{
            fontSize: "6em",
            fontWeight: "normal",
            marginBottom: 0,
            marginTop: "0.3em"
          }}
        />
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
