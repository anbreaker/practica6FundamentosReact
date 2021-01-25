import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {useGetSessionDetails} from '../context/AuthContext';

export const PrivateRoute = (props) => {
  // Save last route
  localStorage.setItem('lastPage', props.location.pathname);

  const {isLogged} = useGetSessionDetails();

  return isLogged ? <Route {...props} /> : <Redirect to="/login" />;
};
