import React from 'react';
import '../style/general.css';

export const HeadLayout = () => {
  return (
    <React.Fragment>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/sketchy/bootstrap.min.css"
        crossOrigin="anonymous"
      />
      <title>NodePop</title>
    </React.Fragment>
  );
};
