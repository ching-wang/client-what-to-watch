import React from "react";
import { Container, Message } from "semantic-ui-react";

export const NotFoundMessage = () => {
  return (
    <Container className="page-container">
      <Message negative>
        <Message.Header>We're sorry we can't find this film</Message.Header>
        <p>Please input other contents and try again</p>
      </Message>
      {/* //     class="ui grid middle aligned segment orange inverted"
    //     style="height: 100%; margin: 0;"
    //   >
    //     <div class="ui column center aligned">
    //       <div class="ui inverted statistic">
    //         <div class="value">404</div>
    //         <div class="label">Error</div>
    //       </div>

    //       <div class="ui message red inverted">
    //         <div class="header">
    //           <h1>
    //             Sorry there is no such a film, please try again with other input
    //           </h1>
    //         </div>
    //         <p>Not found</p>
    //       </div>
    //     </div>
    //   </div> */}{" "}
    </Container>
  );
};
