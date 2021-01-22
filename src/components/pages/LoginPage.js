import React from 'react';
import {Head} from '../Head';
import {Login} from '../Login';
import {Footer} from '../Footer';

export const LoginPage = () => {
  return (
    //Bucle infinito Layout...
    <React.Fragment>
      <Head />
      <Login />
      <Footer />
    </React.Fragment>
  );
};
