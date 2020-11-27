import React from 'react';
import {
  Button,
  Card,
  Container,
  Jumbotron,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap';

function AdvertId({ad}) {
  console.log(ad);

  return (
    <React.Fragment>
      <Container className="p-4">
        <h1>Advert id:</h1>
        <Jumbotron>
          <Card style={{width: '18rem'}}>
            <Card.Img
              variant="top"
              src={`http://localhost:3001/uploads/thumbnails/${ad.imagePath}.png`}
            />
          </Card>

          <Card className="mt-4" style={{width: 'auto'}}>
            <Card.Body>
              <Card.Title>Advert Name:</Card.Title>
              <Card.Text>{`${ad.name} `}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem className="ml-2 mt-2 mr-2">
                On Sale: {ad.onSale}
              </ListGroupItem>
              <ListGroupItem className="ml-2 mt-2 mr-2">Price: {ad.cost} €</ListGroupItem>
              <ListGroupItem className="ml-2 mt-2 mr-2 mb-2 ">
                {/* Tags: {ad.tags.map((tag) => `${tag}, `)} */}
                Tags: {ad.tags && ad.tags.join(', ')}
              </ListGroupItem>
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
}

export default AdvertId;
