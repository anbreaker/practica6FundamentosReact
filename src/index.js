import React from 'react';
import ReactDOM from 'react-dom';

import './style/styles.css';
import {NodePopApp} from './NodePopApp';

const {token} = localStorage.getItem('token');

ReactDOM.render(
  <React.Fragment>
    <NodePopApp isLogged={!!token} />
  </React.Fragment>,
  document.getElementById('root')
);
