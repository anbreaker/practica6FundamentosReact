import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {getSessionDetails} from '../context/AuthContext';

export const PrivateRoute = (props) => {
  const {isLogged} = getSessionDetails();

  return isLogged ? <Route {...props} /> : <Redirect to="/login" />;
};
