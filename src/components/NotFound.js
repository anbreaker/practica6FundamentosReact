import React from 'react';
import {Jumbotron, Container} from 'react-bootstrap';

function NotFound() {
  return (
    <React.Fragment>
      <Container className="p-4">
        <Jumbotron>
          <div className="text-center">
            <h1>404</h1>
            <h2>UH OH! You're lost.</h2>
            <p>
              The page you are looking for does not exist. How you got here is a mystery.
              But you can click the button below to go back to the homepage.
            </p>
            <a href="/" className="btn btn-success btn-lg">
              Go Homepage
            </a>
          </div>
        </Jumbotron>
      </Container>
    </React.Fragment>
  );
}

export default NotFound;
