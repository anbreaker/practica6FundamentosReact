import React from 'react';
import {
  Button,
  Card,
  Container,
  Jumbotron,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap';

function AdvertId() {
  const isLoggedIn = !!localStorage.getItem('token');

  if (isLoggedIn) {
    return (
      <React.Fragment>
        <Container className="p-4">
          <h1>Adverts with id</h1>
          <Jumbotron>
            <Card style={{width: '18rem'}}>
              <Card.Img
                variant="top"
                src="http://localhost:3001/uploads/thumbnails/d1d50271-4b0a-4909-8a9f-b5ad48998d38.png"
              />
            </Card>

            <Card className="mt-4" style={{width: 'auto'}}>
              <Card.Body>
                <Card.Title>Advert Name:</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem className="ml-2 mt-2 mr-2">On Sale</ListGroupItem>
                <ListGroupItem className="ml-2 mt-2 mr-2">Price</ListGroupItem>
                <ListGroupItem className="ml-2 mt-2 mr-2 mb-2 ">id:</ListGroupItem>
              </ListGroup>
              <div className="text-center">
                <Button className="btn btn-success mt-4 mb-4 mr-4" type="submit">
                  Change Adv
                </Button>
                <Button className="btn btn-danger mt-4 mb-4" type="submit">
                  Delete Advert
                </Button>
              </div>
            </Card>
          </Jumbotron>
        </Container>
      </React.Fragment>
    );
  } else {
    window.location.href = '/login';
  }
}

export default AdvertId;
