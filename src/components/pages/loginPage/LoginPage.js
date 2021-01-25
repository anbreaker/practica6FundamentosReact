import React from 'react';
import {LoginForm} from './LoginForm';
import {FooterLayout} from '../../layout/FooterLayout';

export const LoginPage = () => {
  return (
    <React.Fragment>
      <LoginForm />
      <FooterLayout />
    </React.Fragment>
  );
};
