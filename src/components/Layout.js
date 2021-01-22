import React from 'react';
import {Head} from './Head';
import {Footer} from './Footer';

export const Layout = ({children}) => {
  const isLoggedIn = !!localStorage.getItem('token');
  if (!isLoggedIn) return (window.location.href = '/login');

  return (
    <React.Fragment>
      <Head />
      {children}
      <Footer />
    </React.Fragment>
  );
};
