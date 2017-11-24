import React from 'react';

import './Video.css';

const classNames = {
  MAIN: 'video'
}

const Video = ({ videoId }) => (
  <iframe
    className={classNames.MAIN}
    title="youtube"
    src={`https://www.youtube.com/embed/${videoId}`}
  />
);

export default Video;