import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

export const WishListItem = ({ wishListItem }) => {
  const history = useHistory();

  return (
    <Card onClick={() => history.push(`/movies/${wishListItem.movie.imdb_id}`)}>
      <Image src={wishListItem.movie.poster} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{wishListItem.movie.title}</Card.Header>
        <Card.Meta>
          <span className="date">{wishListItem.movie.year}</span>
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