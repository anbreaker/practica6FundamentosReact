import React from 'react';
import {useHistory} from 'react-router-dom';
import {Head} from './Head';
import {Footer} from './Footer';
import {useGetSessionDetails} from '../context/AuthContext';

export const Layout = ({children}) => {
  const history = useHistory();

  const {isLogged} = useGetSessionDetails();

  if (!isLogged) return history.push('/login');

  return (
    <>
      <Head />
      {children}
      <Footer />
    </>
  );
};
