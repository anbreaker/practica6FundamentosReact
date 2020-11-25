import React, {useState, useEffect} from 'react';
import Head from '../Head';
import Navigation from '../Navigation';
import Footer from '../Footer';

function AdsPage(props) {
  const [ads, setAds] = useState();

  const token = localStorage.getItem('token');

  //http://localhost:3001/api/loginJWT
  useEffect(() => {
    fetch(`http://localhost:3001/api/ads?token=${token}`, {
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

  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) => <li>{number}</li>);
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
                <td width="80">Tags</td>
                <td width="280">_id</td>
                <td width="440">Path</td>
              </tr>
            </thead>
            <tbody>
              {ads.map((ad) => (
                <tr className="table-warning">
                  <td>{ad.name}</td>
                  <td className="center">{ad.onSale && true}</td>
                  <td className="center">{ad.cost} €</td>
                  <td className="center">
                    <img src="/uploads/thumbnails/{ad.imagePath}.png" alt="img" />
                  </td>
                  <td className="center">{ad.tags}</td>
                  <td className="center">{ad._id}</td>
                  <td className="center">{ad.imagePath}</td>
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
