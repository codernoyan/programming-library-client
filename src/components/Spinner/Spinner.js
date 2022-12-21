import React from 'react';
import loadingSpinner from '../../assets/paperplane-loading.gif';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <img src={loadingSpinner} alt="spinner" />
    </div>
  );
};

export default Spinner;