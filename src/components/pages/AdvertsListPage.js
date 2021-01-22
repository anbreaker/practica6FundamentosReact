import React, {useState, useEffect} from 'react';
import {Layout} from '../Layout';
import {AdvertsList} from '../AdvertsList';
import {urlBackend} from '../../helpers/apiUrls';

export const AdvertsListPage = (props) => {
  const [ads, setAds] = useState([]);

  const token = localStorage.getItem('token');

  //http://localhost:3001/api/loginJWT
  useEffect(() => {
    fetch(`${urlBackend}api/ads?limit=50&token=${token}`, {
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
  }, [token, urlBackend]);

  return (
    <Layout>
      <AdvertsList ads={ads} />
    </Layout>
  );
};
