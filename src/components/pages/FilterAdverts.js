import React from 'react';
import Head from '../Head';
import Navigation from '../Navigation';
import Footer from '../Footer';
import FormTemplate from '../FormTemplate';

function FilterAdverts() {
  return (
    <div>
      <React.Fragment>
        <Head />
        <Navigation />
        <FormTemplate />
        <Footer />
      </React.Fragment>
    </div>
  );
}

export default FilterAdverts;
