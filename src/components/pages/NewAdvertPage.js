import React from 'react';
import Head from '../Head';
import Navigation from '../Navigation';
import Footer from '../Footer';
import FormTemplate from '../FormNewAdvert';

function NewAdvertPage() {
  return (
    <React.Fragment>
      <Head />
      <Navigation />
      <FormTemplate uploadImage />
      <Footer />
    </React.Fragment>
  );
}

export default NewAdvertPage;
