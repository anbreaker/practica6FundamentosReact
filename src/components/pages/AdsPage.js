import React, {useState, useEffect} from 'react';
import Head from '../Head';
import Navigation from '../Navigation';
import Footer from '../Footer';

function AdsPage(props) {
  const url = `http://localhost:3001/`;
  const [ads, setAds] = useState([]);

  const token = localStorage.getItem('token');

  //http://localhost:3001/api/loginJWT
  useEffect(() => {
    fetch(`${url}api/ads?token=${token}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setAds(response);
        response.forEach((ads) => {
          console.log(ads);
        });
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <React.Fragment>
      <Head />
      <Navigation />
      <div className="container p-4 form-sign">
        <div className="jumbotron">
          <table id="tabel" border="1">
            <thead>
              <tr className="center table-info">
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
                  <td className="center">{ad.onSale ? 'true' : 'false'}</td>
                  <td className="center">{ad.cost} €</td>
                  <td className="center">
                    <img src={`${url}uploads/thumbnails/${ad.imagePath}.png`} alt="img" />
                  </td>
                  <td className="center">{ad.tags.map((tag) => `${tag}, `)}</td>
                  <td className="center">{ad._id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default AdsPage;
