import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {useGetSessionDetails} from '../context/AuthContext';

export const PrivateRoute = (props) => {
  const {isLogged} = useGetSessionDetails();

  return isLogged ? <Route {...props} /> : <Redirect to="/login" />;
};
