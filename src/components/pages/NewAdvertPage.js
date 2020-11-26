import React from 'react';
import Head from '../Head';
import Navigation from '../Navigation';
import Footer from '../Footer';
import FormNewAdvert from '../FormNewAdvert';

function NewAdvertPage() {
  const isLoggedIn = !!localStorage.getItem('token');

  if (isLoggedIn) {
    return (
      <React.Fragment>
        <Head />
        <Navigation />
        <FormNewAdvert uploadImage />
        <Footer />
      </React.Fragment>
    );
  } else {
    window.location.href = '/login';
  }
}

export default NewAdvertPage;
