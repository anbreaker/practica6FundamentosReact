import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {FormFiltersAds} from '../../pagesComponent/advertsComponent/FormFiltersAds';
import {AdvertsList} from '../../pagesComponent/advertsComponent/AdvertsList';
import {Layout} from '../../layout/Layout';
import {urlBackend} from '../../../helpers/apiUrls';

export const FilterAdvertsPage = () => {
  const history = useHistory();
  const [ads, setAds] = useState([]);

  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch(`${urlBackend}api/ads?token=${token}`, {
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
  }, [token, history]);

  function onFilterChange(filters) {
    const params = new URLSearchParams();
    params.set('token', token);
    params.set('name', filters.adName);
    params.set('onSale', filters.onSale);
    params.set('cost', `${filters.cost[0] * 100}-${filters.cost[1] * 100}`);
    filters.tags.forEach((tag) => params.append('tags', tag));

    fetch(`${urlBackend}api/ads?${params.toString()}`, {
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
  }

  return (
    <Layout>
      <FormFiltersAds onFilterChange={onFilterChange} />
      <AdvertsList ads={ads} />
    </Layout>
  );
};
