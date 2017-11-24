import React from 'react';

import loader from '../../assets/loader.gif';

import './Loader.css'

const classNames = {
  MAIN: 'loader'
}

const Loader = () => (
  <div className={classNames.MAIN}>
    <img src={loader} alt="loading" />
  </div>
);

export default Loader;
