import React, {useState, useEffect} from 'react';
import Head from '../Head';
import Navigation from '../Navigation';
import Footer from '../Footer';
import AdvertsList from '../AdvertsList';

function AdvertsListPage(props) {
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
      .then((response) => {
        if (response.status === 200) return response.json();
        window.location.href = '/login';
      })
      .then((response) => setAds(response))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <React.Fragment>
      <Head />
      <Navigation />
      <AdvertsList ads={ads} />
      <Footer />
    </React.Fragment>
  );
}

export default AdvertsListPage;
