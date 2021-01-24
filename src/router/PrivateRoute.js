import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {GetSessionDetails} from '../context/AuthContext';

export const PrivateRoute = (props) => {
  const {isLogged} = GetSessionDetails();

  return isLogged ? <Route {...props} /> : <Redirect to="/login" />;
};
