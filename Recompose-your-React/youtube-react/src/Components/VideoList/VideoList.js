import React from 'react';
import { branch, renderComponent } from 'recompose';

import Video from '../Video';
import Loader from '../Loader';

import './VideoList.css';

const classNames = {
  MAIN: 'app-videoList'
}

const VideoList = ({ list }) => (
  <div className={classNames.MAIN}>
    {
      list.map(item =>
        <Video
          key={item}
          videoId={item}
        />
      )
    }
  </div>
);

export default branch(
  ({ isLoading }) => isLoading,
  renderComponent(Loader)
)(VideoList);
