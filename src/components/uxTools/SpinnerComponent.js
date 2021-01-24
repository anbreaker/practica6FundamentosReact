import React from 'react';
import {Container, Jumbotron, Spinner} from 'react-bootstrap';

export const SpinnerComponent = () => {
  return (
    <React.Fragment>
      <Container>
        <Jumbotron>
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </Jumbotron>
      </Container>
    </React.Fragment>
  );
};
