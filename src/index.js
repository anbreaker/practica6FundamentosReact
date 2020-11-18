import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Head from './components/Head';
import Navigation from './components/Navigation';
import Axios from './components/Axios';
import ScriptsHtml from './components/ScriptsHtml';

import './components/general.css';

ReactDOM.render(
  <React.Fragment>
    <Head />
    <Navigation />
    <Axios />
    <ScriptsHtml />
  </React.Fragment>,
  document.getElementById('root')
);
