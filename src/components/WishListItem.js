import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";

export const WishListItem = ({ wishListItem }) => {
  return (
    <Card>
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
