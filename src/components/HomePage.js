import React from 'react';
import Head from './Head';
import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';

function HomePage() {
  return (
    <React.Fragment>
      <Head></Head>
      <Navigation></Navigation>
      <Header></Header>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default HomePage;
