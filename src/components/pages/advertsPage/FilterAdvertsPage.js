import React, {useState, useEffect} from 'react';

import {FormFiltersAds} from './FormFiltersAds';
import {AdvertsList} from './AdvertsList';
import {Layout} from '../../layout/Layout';
import {SpinnerComponent} from '../../uxTools/SpinnerComponent';
import {useGetSessionDetails} from '../../../context/AuthContext';
import {showAdvertsByFilters, showAdvertsList} from '../../../helpers/fetchApi';

export const FilterAdvertsPage = () => {
  const [ads, setAds] = useState([]);

  const {token} = useGetSessionDetails();

  const adversToShow = async (token) => {
    const response = await showAdvertsList(token);
    setAds(response);
  };

  useEffect(() => {
    adversToShow(token);
  }, [token]);

  const onFilterChange = async (filters) => {
    const params = new URLSearchParams();
    params.set('token', token);
    params.set('name', filters.adName);
    params.set('onSale', filters.onSale);
    params.set('cost', `${filters.cost[0] * 100}-${filters.cost[1] * 100}`);
    filters.tags.forEach((tag) => params.append('tags', tag));

    let response = await showAdvertsByFilters(params);
    setAds(response);
  };

  return (
    <Layout>
      <FormFiltersAds onFilterChange={onFilterChange} />
      {ads.length !== 0 ? <AdvertsList ads={ads} /> : <SpinnerComponent />}
    </Layout>
  );
};

<Layout></Layout>;
