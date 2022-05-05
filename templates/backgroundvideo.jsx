import React from 'react';

export default function BackgroundVideo(props) {
  const { _backgroundVideo, _screenSize } = props;

  function UseVideo() {
    return <video
      preload="auto"
      loop
      autoPlay
      muted
      poster={_backgroundVideo._graphic}
    >
      <source
        src={_backgroundVideo._mp4 !== '' ? _backgroundVideo._mp4 : _backgroundVideo._webm}
        type={_backgroundVideo._mp4 !== '' ? 'video/mp4' : 'video/webm'}
      ></source>
    </video>;
  }

  function UseGraphic() {
    if (_backgroundVideo._graphic) {
      return <img src={_backgroundVideo._graphic}/>;
    }
    return null;
  }

  if (_screenSize !== 'small') {
    return <UseVideo />;
  }
  return <UseGraphic />;
}
