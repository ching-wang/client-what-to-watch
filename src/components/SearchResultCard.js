import React from "react";
import { Card, Image, Popup } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

export const SearchResultCard = ({ searchResult }) => {
  const history = useHistory();
  return (
    <Popup
      content="Click to view film details"
      size="small"
      position="left center"
      trigger={
        <Card onClick={() => history.push(`/movies/${searchResult.imdbID}`)}>
          <Image
            src={
              searchResult.Poster !== "N/A"
                ? searchResult.Poster
                : window.location.origin + `/default-movie-poster.jpg`
            }
          />
          <Card.Content>
            <Card.Header>{searchResult.Title}</Card.Header>
            <Card.Meta>
              <span className="date">{searchResult.Year}</span>
            </Card.Meta>
          </Card.Content>
        </Card>
      }
    />
  );
};
