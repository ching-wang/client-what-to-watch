import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

export const SearchResultCard = ({ searchResult }) => {
  const history = useHistory();
  return (
    <Card onClick={() => history.push(`/movies/${searchResult.imdbID}`)}>
      <Image src={searchResult.Poster} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{searchResult.Title}</Card.Header>
        <Card.Meta>
          <span className="date">{searchResult.Year}</span>
        </Card.Meta>
        <Card.Description>
          <a>
            <Icon name="eye" /> View Details
          </a>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};
