import React from 'react';
import {HeadLayout} from '../../layout/HeadLayout';
import {NotFoundBody} from './NotFoundBody';

export const NotFoundPage = () => {
  return (
    <React.Fragment>
      <HeadLayout />
      <NotFoundBody />
    </React.Fragment>
  );
};
