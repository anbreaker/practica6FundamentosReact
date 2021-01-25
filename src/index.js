import React from 'react';
import ReactDOM from 'react-dom';

import './style/styles.css';
import {AppRouter} from './router/AppRouter';

const token = localStorage.getItem('token') || null;

ReactDOM.render(
  <React.Fragment>
    <AppRouter token={token} />;
  </React.Fragment>,
  document.getElementById('root')
);
