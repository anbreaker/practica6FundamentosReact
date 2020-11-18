import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Head from './components/Head';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

import './components/general.css';

ReactDOM.render(
  <React.Fragment>
    <Head />
    <Navigation />
    <Header />
    {/* <App /> */}
    <Footer />
  </React.Fragment>,
  document.getElementById('root')
);
