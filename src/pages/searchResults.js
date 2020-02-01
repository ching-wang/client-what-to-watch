import React, { useState, useEffect } from "react";
import API from "../adapters/API";
import { Container, Card } from "semantic-ui-react";
import { SearchResultCard } from "../components/SearchResultCard";

export const SearchResults = props => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    // console.log(props.location.search);
    API.searchMovies("action").then(res => setResults(res.Search));
  }, []);
  if (!results) {
    return <></>;
  }
  return (
    <Container>
      <div className="page-container">
        <h1>Search results</h1>
        <Card.Group>
          {results.map(r => (
            <SearchResultCard searchResult={r} />
          ))}
        </Card.Group>
      </div>
    </Container>
  );
};
