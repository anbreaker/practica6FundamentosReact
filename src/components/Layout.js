import React from 'react';
import {useHistory} from 'react-router-dom';
import {Head} from './Head';
import {Footer} from './Footer';

export const Layout = ({children}) => {
  const history = useHistory();
  const isLoggedIn = !!localStorage.getItem('token');
  if (!isLoggedIn) return history.push('/login');

  return (
    <React.Fragment>
      <Head />
      {children}
      <Footer />
    </React.Fragment>
  );
};
