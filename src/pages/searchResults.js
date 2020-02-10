import React, { useState, useEffect } from "react";
import API from "../adapters/API";
import { Container, Card, Pagination } from "semantic-ui-react";
import { SearchResultCard } from "../components/SearchResultCard";
import { useLocation, useHistory } from "react-router-dom";
import * as queryString from "query-string";
import { NotFoundMessage } from "./notFoundMessage";
import { useAlert } from "react-alert";

export const SearchResults = ({ handleShowMovieCard }) => {
  const location = useLocation();
  const params = queryString.parse(location.search);
  const query = params.s;

  const [results, setResults] = useState([]);
  const [page, setPage] = useState(parseInt(params.page) || 1);
  const [totalResults, setTotalResults] = useState(0);

  const history = useHistory();
  const [error, setError] = useState("");

  useEffect(() => {
    API.searchMovies(query, page)
      .then(res => {
        setResults(res.Search);
        setTotalResults(parseInt(res.totalResults));
      })
      .catch(setError);
  }, [query, page]);

  const handlePaginationChange = (e, { activePage }) => {
    setPage(activePage);
    history.push(`/search?s=${query}&page=${activePage}`);
  };

  // if (!results) {
  //   return (
  //     <>
  //       <NotFoundMessage />
  //     </>
  //   );
  // }

  const alert = useAlert();
  if (!results) {
    alert.show(error);
  }

  return (
    <Container>
      <div className="page-container">
        <Container textAlign="center">
          <h1 className="search-result">SEARCH RESULTS</h1>
          <Pagination
            defaultActivePage={page}
            totalPages={Math.ceil(totalResults / 10)}
            onPageChange={handlePaginationChange}
          />
        </Container>
        <br />
        <Card.Group centered={true} itemsPerRow={5}>
          {results.map(result => (
            <SearchResultCard
              key={result.imdbID}
              searchResult={result}
              handleShowMovieCard={handleShowMovieCard}
            />
          ))}
        </Card.Group>
        <br />
        <br />
        <Container textAlign="center">
          <Pagination
            defaultActivePage={page}
            totalPages={Math.ceil(totalResults / 10)}
            onPageChange={handlePaginationChange}
          />
        </Container>
      </div>
    </Container>
  );
};
