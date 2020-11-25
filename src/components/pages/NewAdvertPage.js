import React from 'react';
import Head from '../Head';
import Navigation from '../Navigation';
import Footer from '../Footer';
import FormNewAdvert from '../FormNewAdvert';

function NewAdvertPage() {
  return (
    <React.Fragment>
      <Head />
      <Navigation />
      <FormNewAdvert uploadImage />
      <Footer />
    </React.Fragment>
  );
}

export default NewAdvertPage;
