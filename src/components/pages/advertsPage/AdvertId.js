import React from 'react';
import {useHistory} from 'react-router-dom';
import {Card, Container, Jumbotron, ListGroup, ListGroupItem} from 'react-bootstrap';

import {WarningWindow} from './WarningWindow';
import {urlBackend} from '../../../helpers/apiUrls';

import {deleteAdById} from '../../../helpers/fetchApi';
import {useGetSessionDetails} from '../../../context/AuthContext';

export const AdvertId = ({ad}) => {
  const history = useHistory();

  const {token} = useGetSessionDetails();

  const id = ad._id;

  const deleteAdvert = async (event) => {
    event.preventDefault();

    await deleteAdById({id, token});
    history.push('/adverts');
  };

  return (
    <React.Fragment>
      <Container className="p-4">
        <h1>Advert id:</h1>
        <Jumbotron>
          <Card style={{width: '12rem'}}>
            <Card.Img
              variant="top"
              src={`${urlBackend}uploads/thumbnails/${ad.imagePath}.png`}
            />
          </Card>

          <Card className="mt-4" style={{width: 'auto'}}>
            <Card.Body>
              <Card.Title>Advert Name:</Card.Title>
              <Card.Text>{`${ad.name} `}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem className="ml-2 mt-2 mr-2">
                On Sale: {ad.onSale.toString()}
              </ListGroupItem>
              <ListGroupItem className="ml-2 mt-2 mr-2">Price: {ad.cost} €</ListGroupItem>
              <ListGroupItem className="ml-2 mt-2 mr-2 mb-2 ">
                Tags: {ad.tags && ad.tags.join(', ')}
              </ListGroupItem>
            </ListGroup>
            <div className="text-center">
              <WarningWindow deleteAdvert={deleteAdvert} />
            </div>
          </Card>
        </Jumbotron>
      </Container>
    </React.Fragment>
  );
};
