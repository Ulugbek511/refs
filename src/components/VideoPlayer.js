import React, { useRef } from 'react';
import video1 from "../playlist/video.MP4"


const VideoPlayer = () => {
  const videoRef = useRef(null);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const stopVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; 
    }
  };

  return (
    <div>
      <video ref={videoRef} src={video1} hidden />
      <button onClick={playVideo}>Play Video</button>
      <button onClick={stopVideo}>Stop Video</button>
    </div>
  );
};

export default VideoPlayer;
