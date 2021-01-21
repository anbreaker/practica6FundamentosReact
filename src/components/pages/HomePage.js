import React from 'react';
import {Head} from '../Head';
import {Navigation} from '../Navigation';
import {Header} from '../Header';
import {Footer} from '../Footer';

export const HomePage = () => {
  return (
    //Bucle infinito Layout...
    <React.Fragment>
      <Head />
      <Navigation />
      <Header />
      <Footer />
    </React.Fragment>
  );
};
