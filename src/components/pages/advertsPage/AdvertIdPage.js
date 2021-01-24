import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import {urlBackend} from '../../../helpers/apiUrls';
import {AdvertId} from '../../pagesComponent/advertsComponent/AdvertId';
import {Layout} from '../../layout/Layout';
import {SpinnerComponent} from '../../uxTools/SpinnerComponent';

export const AdvertIdPage = (props) => {
  const history = useHistory();
  const {id} = useParams();
  const [advert, setadvert] = useState();

  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch(`${urlBackend}api/ads/${id}?token=${token}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.status === 200) return response.json();
        history.push('/login');
      })
      .then((response) => setadvert(response))
      .catch((error) => console.error('Error:', error));
  }, [token, id, history]);

  return <Layout>{advert ? <AdvertId ad={advert} /> : <SpinnerComponent />}</Layout>;
};
