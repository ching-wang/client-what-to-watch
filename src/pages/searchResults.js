import React, { useState, useEffect } from "react";
import API from "../adapters/API";
import { Container, Card, Pagination } from "semantic-ui-react";
import { SearchResultCard } from "../components/SearchResultCard";
import { useLocation } from "react-router-dom";
import * as queryString from "query-string";

export const SearchResults = ({ handleShowMovieCard }) => {
  const [results, setResults] = useState([]);
  const location = useLocation();
  const query = queryString.parse(location.search).s;

  useEffect(() => {
    API.searchMovies(query).then(res => setResults(res.Search));
  }, [query]);

  if (!results) {
    return <></>;
  }
  return (
    <Container>
      <div className="page-container">
        <h1>Search results</h1>
        <Card.Group centered={true} itemsPerRow={5}>
          {results.map(result => (
            <SearchResultCard
              key={result.imdbID}
              searchResult={result}
              handleShowMovieCard={handleShowMovieCard}
            />
          ))}
        </Card.Group>
        <Pagination
          boundaryRange={0}
          defaultActivePage={1}
          ellipsisItem={null}
          firstItem={null}
          lastItem={null}
          siblingRange={1}
          totalPages={10}
        />
      </div>
    </Container>
  );
};
