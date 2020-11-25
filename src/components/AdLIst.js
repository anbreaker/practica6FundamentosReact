import React from 'react';

function AdLIst({ads = []}) {
  const url = `http://localhost:3001/`;
  return (
    <React.Fragment>
      <div className="container p-4 form-sign">
        <h1>Ads List</h1>
        <div className="jumbotron">
          <table id="tabel" border="1">
            <thead>
              <tr className="text-center table-info">
                <td width="200">Adverts</td>
                <td width="100">Sale</td>
                <td width="80">Cost</td>
                <td width="80">Photo</td>
                <td width="260">Tags</td>
                <td width="240">_id</td>
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
          </table>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AdLIst;
