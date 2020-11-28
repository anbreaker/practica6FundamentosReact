import React from 'react';
import {Jumbotron, Container, Table} from 'react-bootstrap';

function AdList({ads = []}) {
  const urlBackend = `http://localhost:3001/`;
  const urlFront = `http://localhost:3000/`;

  return (
    <React.Fragment>
      <Container className="p-4 form-sign">
        <h1>Ads List</h1>
        <Jumbotron>
          <Table responsive>
            <thead>
              <tr className="text-center table-info">
                <th>Adverts</th>
                <th>Sale</th>
                <th>Cost</th>
                <th>Photo</th>
                <th>Tags</th>
                <th>_id</th>
              </tr>
            </thead>
            <tbody>
              {ads.map((ad) => (
                <tr className="table-warning">
                  <td>{ad.name}</td>
                  <td className="text-center">{ad.onSale ? 'true' : 'false'}</td>
                  <td className="text-center">{ad.cost} €</td>
                  <td className="center">
                    <a href={`${urlFront}advert/${ad._id}`}>
                      <img
                        src={`${urlBackend}uploads/thumbnails/${ad.imagePath}.png`}
                        alt="img"
                      />
                    </a>
                  </td>
                  <td className="text-center">{ad.tags.join(', ')}</td>
                  <td className="text-center">
                    <a href={`${urlFront}advert/${ad._id}`}>{ad._id}</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Jumbotron>
      </Container>
    </React.Fragment>
  );
}

export default AdList;
