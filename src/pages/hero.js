import React from "react";
import { Header, Container } from "semantic-ui-react";
import SearchBar from "../components/searchBar";

const Hero = user => {
  return (
    <Container textAlign="center" text>
      <Header
        as="h4"
        content="What do you want to watch?"
        inverted
        className="hero-header"
      />
      <SearchBar />
    </Container>
  );
};

export default Hero;
