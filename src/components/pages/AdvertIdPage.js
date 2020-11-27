import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import AdvertId from '../AdvertId';
import Layout from '../Layout';

function AdvertIdPage(props) {
  const {id} = useParams();

  //fetch
  const url = `http://localhost:3001/`;
  const [advert, setadvert] = useState();

  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch(`${url}api/ads/${id}?token=${token}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.status === 200) return response.json();
        window.location.href = '/login';
      })
      .then((response) => setadvert(response))
      .catch((error) => console.error('Error:', error));
  }, []);

  return <Layout>{advert ? <AdvertId ad={advert} /> : 'Cargando'}</Layout>;
}

export default AdvertIdPage;
