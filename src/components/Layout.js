import React from 'react';
import {useHistory} from 'react-router-dom';
import {Head} from './Head';
import {Footer} from './Footer';
import {GetSessionDetails} from '../context/AuthContext';

export const Layout = ({children}) => {
  const history = useHistory();

  const {isLogged} = GetSessionDetails();

  if (!isLogged) return history.push('/login');

  return (
    <>
      <Head />
      {children}
      <Footer />
    </>
  );
};
