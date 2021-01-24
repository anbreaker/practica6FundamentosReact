import React from 'react';
import {Jumbotron, Container, Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import {urlBackend} from '../../../helpers/apiUrls';

export const AdvertsList = ({ads = []}) => {
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
                <tr key={`inline-${ad._id}`} className="table-warning">
                  <td>{ad.name}</td>
                  <td className="text-center">{ad.onSale ? 'true' : 'false'}</td>
                  <td className="text-center">{ad.cost} €</td>
                  <td className="center">
                    <Link to={`advert/${ad._id}`}>
                      <img
                        src={`${urlBackend}uploads/thumbnails/${ad.imagePath}.png`}
                        alt="img"
                      />
                    </Link>
                  </td>
                  <td className="text-center">{ad.tags.join(', ')}</td>
                  <td className="text-center">
                    <Link to={`advert/${ad._id}`}>{ad._id}</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Jumbotron>
      </Container>
    </React.Fragment>
  );
};
