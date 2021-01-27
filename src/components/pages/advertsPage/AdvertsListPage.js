import React, {useState, useEffect} from 'react';

import {Layout} from '../../layout/Layout';
import {AdvertsList} from './AdvertsList';
import {SpinnerComponent} from '../../uxTools/SpinnerComponent';
import {useGetSessionDetails} from '../../../context/AuthContext';
import {showAdvertsList} from '../../../helpers/fetchApi';

export const AdvertsListPage = (props) => {
  const [ads, setAds] = useState([]);

  const {token} = useGetSessionDetails();

  const adversToShow = async (token) => {
    const response = await showAdvertsList(token);
    setAds(response);
  };

  useEffect(() => {
    adversToShow(token);
  }, [token]);

  return (
    <Layout>{ads.length !== 0 ? <AdvertsList ads={ads} /> : <SpinnerComponent />}</Layout>
  );
};
