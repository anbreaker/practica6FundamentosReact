import React from 'react';
import Layout from '../Layout';
import {useParams} from 'react-router-dom';

import FormChangeAdvert from '../FormChangeAdvert';

function ChangeAdvertPage(props) {
  const {id} = useParams();

  return (
    <Layout>
      <FormChangeAdvert id={id} uploadImage />
    </Layout>
  );
}

export default ChangeAdvertPage;
