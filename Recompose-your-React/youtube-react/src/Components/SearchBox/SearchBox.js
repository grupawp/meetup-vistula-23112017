import React from 'react';

import './SearchBox.css';

const classNames = {
  MAIN: 'app-searchBox',
  INPUT: 'searchBox-input',
  BTN: 'searchBox-btn',
};

const SearchBox = ({
  input,
  handleChangeInput,
  handleSearch,
  gapiReady
}) => (
  <div className={classNames.MAIN}>
    <input
      className={classNames.INPUT}
      type="text"
      placeholder="Search"
      value={input}
      onChange={handleChangeInput}
      autoFocus
    />
    <button
      className={classNames.BTN}
      onClick={handleSearch}
      disabled={!gapiReady}
    >
      FIDN
    </button>
  </div>
);

export default SearchBox;
