import React from 'react';
import Loading from '../loading/loading.js';

const withLoading = (Component) => ({ isLoading, ...rest }) => {

  return isLoading
    ? <Loading />
    : <Component {...rest} />;

};

export default withLoading;
