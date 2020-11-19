import React from 'react';
import Head from './Head';
import Navigation from './Navigation';
import Login from './Login';
import Footer from './Footer';

function LoginPage() {
  return (
    <React.Fragment>
      <Head></Head>
      <Navigation></Navigation>
      <Login></Login>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default LoginPage;
