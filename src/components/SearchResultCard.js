import React from "react";
import { Card, Image} from "semantic-ui-react";
import { useHistory } from "react-router-dom";

export const SearchResultCard = ({ searchResult }) => {
  const history = useHistory();
  return (
    // <Popup
    //   content="Click to view film details"
    //   size="small"
    //   position="left center"
    //   trigger={
    <Card onClick={() => history.push(`/movies/${searchResult.imdbID}`)}>
      <Image
        className="card-img-size"
        src={
          searchResult.Poster !== "N/A"
            ? searchResult.Poster
            : window.location.origin + `/default-movie-poster.jpg`
        }
      />
      <Card.Content>
        <Card.Header>
          <span className="movie-title">{searchResult.Title}</span>
          &nbsp; &nbsp;
          <span className="movie-released">{searchResult.Year}</span>
        </Card.Header>
        <br />
        {/* <Card.Meta>
          <span>
            <Popup
              content="View Details"
              size="small"
              position="left center"
              trigger={
                <Icon
                  name="eye"
                  size="large"
                  color="brown"
                  onClick={() => history.push(`/movies/${searchResult.imdbID}`)}
                />
              }
            />
          </span>
        </Card.Meta> */}
      </Card.Content>
    </Card>
    //   }
    // />
  );
};
