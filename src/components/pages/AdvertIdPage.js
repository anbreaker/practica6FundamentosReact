import React from 'react';
import Head from '../Head';
import Navigation from '../Navigation';
import Footer from '../Footer';
import AdvertId from '../AdvertId';

function AdvertIdPage() {
  const isLoggedIn = !!localStorage.getItem('token');

  if (isLoggedIn) {
    return (
      <React.Fragment>
        <Head />
        <Navigation />
        <AdvertId />
        <Footer />
      </React.Fragment>
    );
  } else {
    window.location.href = '/login';
  }
}

export default AdvertIdPage;
