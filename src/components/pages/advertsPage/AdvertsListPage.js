import React, {useState, useEffect} from 'react';

import {Layout} from '../../layout/Layout';
import {AdvertsList} from './AdvertsList';
import {SpinnerComponent} from '../../uxTools/SpinnerComponent';
import {urlBackend} from '../../../helpers/apiUrls';
import {useGetSessionDetails} from '../../../context/AuthContext';

export const AdvertsListPage = (props) => {
  const [ads, setAds] = useState([]);

  const {token} = useGetSessionDetails();

  useEffect(() => {
    fetch(`${urlBackend}api/ads?limit=50&token=${token}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.status === 200) return response.json();
      })
      .then((response) => {
        setAds(response);
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <Layout>{ads.length !== 0 ? <AdvertsList ads={ads} /> : <SpinnerComponent />}</Layout>
  );
};
