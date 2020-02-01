import React from "react";
import { Card, Image } from "semantic-ui-react";

export const SearchResultCard = ({ searchResult }) => {
  return (
    <Card>
      <Image src={searchResult.Poster} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{searchResult.Title}</Card.Header>
        <Card.Meta>
          <span className="date">{searchResult.Year}</span>
        </Card.Meta>
        <Card.Description>{searchResult.Type}</Card.Description>
      </Card.Content>
    </Card>
  );
};
