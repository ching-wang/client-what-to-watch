import React from "react";
import { Header, Container } from "semantic-ui-react";
import SearchBar from "../components/searchBar";

const Hero = () => {
  return (
    <Container text>
      <Header
        as="h4"
        content="What do you want to watch?"
        inverted
        style={{
          fontSize: "6em",
          fontWeight: "normal",
          marginBottom: 0,
          marginTop: "0.8em"
        }}
      />
      {/* <SearchBar /> */}
    </Container>
  );
};

export default Hero;
