import React, { useState, useEffect } from "react";
import API from "../adapters/API";
import { Container, Card, Pagination } from "semantic-ui-react";
import { SearchResultCard } from "../components/SearchResultCard";
import { useLocation, useHistory } from "react-router-dom";
import * as queryString from "query-string";
import SearchBar from "../components/searchBar";

export const SearchResults = ({ handleShowMovieCard }) => {
  const location = useLocation();
  const params = queryString.parse(location.search);
  const query = String(params.s || "").trim();

  const [results, setResults] = useState([]);
  const [page, setPage] = useState(parseInt(params.page) || 1);
  const [totalResults, setTotalResults] = useState(0);

  const history = useHistory();
  const [error, setError] = useState("");

  useEffect(() => {
    if (!query) {
      return;
    }
    API.searchMovies(query, page)
      .then(res => {
        setResults(res.Search);
        setTotalResults(parseInt(res.totalResults));
      })
      .catch(e => {
        setError(e);
        setResults(undefined);
      });
  }, [query, page]);

  const handlePaginationChange = (e, { activePage }) => {
    setPage(activePage);
    history.push(`/search?s=${query}&page=${activePage}`);
  };

  if (!results) {
    return (
      <Container textalign="center">
        <div className="page-container">
          <h1>No movies found for that query. Sorry!</h1>
        </div>
        <Container textalign="center" text>
          <SearchBar />
        </Container>
      </Container>
    );
  }

  if (results.length < 1) {
    return (
      <Container>
        <div className="page-container">
          <h1>Searching...</h1>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="page-container">
        <Container textalign="center">
          <h1 className="search-result">SEARCH RESULTS</h1>
          {totalResults > 10 ? (
            <Pagination
              defaultActivePage={page}
              totalPages={Math.ceil(totalResults / 10)}
              onPageChange={handlePaginationChange}
            />
          ) : (
            <></>
          )}
        </Container>
        <br />
        <Card.Group centered={true}>
          {(results || []).map(result => (
            <SearchResultCard
              key={result.imdbID}
              searchResult={result}
              handleShowMovieCard={handleShowMovieCard}
            />
          ))}
        </Card.Group>
        <br />
        <br />
        <Container textalign="center">
          {totalResults > 1 ? (
            <Pagination
              defaultActivePage={page}
              totalPages={Math.ceil(totalResults / 10)}
              onPageChange={handlePaginationChange}
            />
          ) : (
            <></>
          )}
        </Container>
      </div>
    </Container>
  );
};
