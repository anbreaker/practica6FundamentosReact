import React from 'react';
import {Jumbotron, Table} from 'react-bootstrap';

function AdLIst({ads = []}) {
  const url = `http://localhost:3001/`;
  return (
    <React.Fragment>
      <div className="container p-4 form-sign">
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
                    <img src={`${url}uploads/thumbnails/${ad.imagePath}.png`} alt="img" />
                  </td>
                  <td className="text-center">{ad.tags.map((tag) => `${tag}, `)}</td>
                  <td className="text-center">{ad._id}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Jumbotron>

        <div></div>
      </div>
    </React.Fragment>
  );
}

export default AdLIst;
