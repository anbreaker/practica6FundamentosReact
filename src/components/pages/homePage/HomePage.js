import React from 'react';
import {HeadLayout} from '../../layout/HeadLayout';
import {BodyHome} from './BodyHome';
import {FooterLayout} from '../../layout/FooterLayout';

export const HomePage = () => {
  return (
    <React.Fragment>
      <HeadLayout />
      <BodyHome />
      <FooterLayout />
    </React.Fragment>
  );
};
