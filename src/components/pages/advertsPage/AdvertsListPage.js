import React, {useState, useEffect} from 'react';

import {Layout} from '../../layout/Layout';
import {AdvertsList} from './AdvertsList';
import {urlBackend} from '../../../helpers/apiUrls';
import {useGetSessionDetails} from '../../../context/AuthContext';

import {SpinnerComponent} from '../../uxTools/SpinnerComponent';

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
        console.log(response);
        setTimeout(() => {
          setAds(response);
        }, 1500);
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <Layout>
      <AdvertsList ads={ads} />
    </Layout>
  );
};
// return <Layout>{ads ? <AdvertsList ads={ads} /> : <SpinnerComponent /> }</Layout>;
