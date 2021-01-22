import React from 'react';
import {Head} from '../Head';
import {Header} from '../Header';
import {Footer} from '../Footer';

export const HomePage = () => {
  return (
    //Bucle infinito Layout...
    <React.Fragment>
      <Head />
      <Header />
      <Footer />
    </React.Fragment>
  );
};
