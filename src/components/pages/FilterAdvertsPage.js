import React, {useState, useEffect} from 'react';
import Head from '../Head';
import Navigation from '../Navigation';
import Footer from '../Footer';
import FormFiltersAds from '../FormFiltersAds';
import AdvertsList from '../AdvertsList';

function FilterAdverts() {
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

  function onFilterChange(filters) {
    const params = new URLSearchParams();
    params.set('token', token);
    params.set('name', filters.name);
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
    <div>
      <React.Fragment>
        <Head />
        <Navigation />
        <FormFiltersAds />
        <AdvertsList ads={ads} />
        <Footer />
      </React.Fragment>
    </div>
  );
}

export default FilterAdverts;
