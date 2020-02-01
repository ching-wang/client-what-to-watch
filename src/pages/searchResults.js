import React, { useState, useEffect } from "react";
import API from "../adapters/API";
import { Container, Card } from "semantic-ui-react";
import { SearchResultCard } from "../components/SearchResultCard";
import { useLocation } from "react-router-dom";
import * as queryString from "query-string";

export const SearchResults = props => {
  const [results, setResults] = useState([]);
  const location = useLocation();
  const query = queryString.parse(location.search).s;
  useEffect(() => {
    API.searchMovies(query).then(res => setResults(res.Search));
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
            <SearchResultCard key={r.imdbID} searchResult={r} />
          ))}
        </Card.Group>
      </div>
    </Container>
  );
};
