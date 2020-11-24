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
        console.log(response);
        setAds(response);
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <React.Fragment>
      <Head />
      <Navigation />
      <div className="container p-4 form-sign">
        <div className="jumbotron">
          <div>{JSON.stringify(ads)} &#60;--ver</div>
          <table id="tabel" border="1">
            <tbody>
              <tr class="center table-info">
                <td width="200">Adverts</td>
                <td width="100">Sale</td>
                <td width="80">Cost</td>
                <td width="80">Photo</td>
                <td width="80">Tags</td>
                <td width="280">_id</td>
                <td width="440">Path</td>
              </tr>
              <tr class="table-warning">
                <td>{ads}</td>
                <td class="center"></td>
                <td class="center">
                  <img src="/uploads/thumbnails/advert.imagePath.png" alt="img" />
                </td>
                <td class="center">{ads}</td>
                <td class="center">{ads}</td>
                <td class="center">{ads}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default AdsPage;
