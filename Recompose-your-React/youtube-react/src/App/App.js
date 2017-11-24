import React from 'react';

import { SearchBox, VideoList } from '../Components';

import { withYoutubeSearch } from '../Hocs'

import './App.css';

const classNames = {
  VideoList: 'app'
};

const App = ({
  input,
  handleChangeInput,
  handleSearch,
  gapiReady,
  list,
  isLoading
}) => (
  <div className={classNames.VideoList}>
    <SearchBox
      input={input}
      handleChangeInput={handleChangeInput}
      handleSearch={handleSearch}
      gapiReady={gapiReady}
    />
    <VideoList
      list={list}
      isLoading={isLoading}
    />
  </div>
);

export default withYoutubeSearch(App);
