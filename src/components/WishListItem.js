import React from "react";
import { Card, Image, Icon, Popup } from "semantic-ui-react";
import { useHistory, useParams } from "react-router-dom";

export const WishListItem = ({ wishListItem }) => {
  const history = useHistory();
  const params = useParams();

  console.log(params);

  return (
    <Card rasied>
      <Image src={wishListItem.movie.poster} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{wishListItem.movie.title}</Card.Header>
        <Card.Meta>
          <span className="date">{wishListItem.movie.year}</span>
        </Card.Meta>
        <Card.Meta>
          <span>
            <Popup
              content="View Details"
              size="small"
              position="left center"
              trigger={
                <Icon
                  name="eye"
                  size="large"
                  color="olive"
                  onClick={() =>
                    history.push(`/movies/${wishListItem.movie.imdb_id}`)
                  }
                />
              }
            />
          </span>
          <Popup
            content="Remove this film from this wishlist"
            size="small"
            position="left center"
            trigger={
              <Icon name="delete" size="large" color="orange" onClick={null} />
            }
          />
        </Card.Meta>
      </Card.Content>
    </Card>
  );
};
