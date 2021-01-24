import React from 'react';

import {Layout} from '../../layout/Layout';
import {FormNewAdvert} from './FormNewAdvert';

export const NewAdvertPage = () => {
  return (
    <Layout>
      <FormNewAdvert uploadImage />
    </Layout>
  );
};
