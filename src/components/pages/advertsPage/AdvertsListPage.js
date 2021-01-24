import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

import {Layout} from '../../layout/Layout';
import {AdvertsList} from './AdvertsList';
import {urlBackend} from '../../../helpers/apiUrls';

export const AdvertsListPage = (props) => {
  const history = useHistory();

  const [ads, setAds] = useState([]);

  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch(`${urlBackend}api/ads?limit=50&token=${token}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.status === 200) return response.json();

        history.push('/login');
      })
      .then((response) => setAds(response))
      .catch((error) => console.error('Error:', error));
  }, [token, urlBackend, history]);

  return (
    <Layout>
      <AdvertsList ads={ads} />
    </Layout>
  );
};
