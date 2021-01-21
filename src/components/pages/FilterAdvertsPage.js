import React, {useState, useEffect} from 'react';
import FormFiltersAds from '../FormFiltersAds';
import AdvertsList from '../AdvertsList';
import Layout from '../Layout';

export const FilterAdvertsPage = () => {
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
  }, [token, url]);

  function onFilterChange(filters) {
    const params = new URLSearchParams();
    params.set('token', token);
    params.set('name', filters.adName);
    params.set('onSale', filters.onSale);
    params.set('cost', `${filters.cost[0] * 100}-${filters.cost[1] * 100}`);
    filters.tags.forEach((tag) => params.append('tags', tag));

    fetch(`${url}api/ads?${params.toString()}`, {
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
  }

  return (
    <Layout>
      <FormFiltersAds onFilterChange={onFilterChange} />
      <AdvertsList ads={ads} />
    </Layout>
  );
};
