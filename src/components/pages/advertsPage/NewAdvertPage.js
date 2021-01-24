import React from 'react';
import {Layout} from '../../layout/Layout';
import {FormNewAdvert} from '../../pagesComponent/advertsComponent/FormNewAdvert';

export const NewAdvertPage = () => {
  return (
    <Layout>
      <FormNewAdvert uploadImage />
    </Layout>
  );
};
