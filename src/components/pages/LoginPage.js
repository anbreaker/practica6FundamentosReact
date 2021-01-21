import React from 'react';
import {Head} from '../Head';
import Navigation from '../Navigation';
import Login from '../Login';
import {Footer} from '../Footer';

export const LoginPage = () => {
  return (
    //Bucle infinito Layout...
    <React.Fragment>
      <Head />
      <Navigation />
      <Login />
      <Footer />{' '}
    </React.Fragment>
  );
};
