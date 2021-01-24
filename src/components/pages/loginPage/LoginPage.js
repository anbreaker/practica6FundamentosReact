import React from 'react';
import {HeadLayout} from '../../layout/HeadLayout';
import {LoginForm} from './LoginForm';
import {FooterLayout} from '../../layout/FooterLayout';

export const LoginPage = () => {
  return (
    <React.Fragment>
      <HeadLayout />
      <LoginForm />
      <FooterLayout />
    </React.Fragment>
  );
};
