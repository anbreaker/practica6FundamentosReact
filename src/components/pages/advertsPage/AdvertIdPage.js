import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import {AdvertId} from './AdvertId';
import {Layout} from '../../layout/Layout';
import {SpinnerComponent} from '../../uxTools/SpinnerComponent';
import {showAdvertPageById} from '../../../helpers/fetchApi';
import {useGetSessionDetails} from '../../../context/AuthContext';

export const AdvertIdPage = (props) => {
  const {id} = useParams();
  const [advert, setadvert] = useState();

  const {token} = useGetSessionDetails();

  const changeAdverToShow = async (id, token) => {
    const response = await showAdvertPageById(id, token);
    setadvert(response);
  };

  useEffect(() => {
    changeAdverToShow(id, token);
  }, [id, token]);

  return <Layout>{advert ? <AdvertId ad={advert} /> : <SpinnerComponent />}</Layout>;
};
