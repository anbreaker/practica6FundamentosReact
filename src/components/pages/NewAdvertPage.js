import React from 'react';
import {FormNewAdvert} from '../FormNewAdvert';
import {Layout} from '../Layout';

export const NewAdvertPage = () => {
  return (
    <Layout>
      <FormNewAdvert uploadImage />
    </Layout>
  );
};
