import React, { useRef } from 'react';
import audio1 from "../playlist/odamlar_nima_deydi.mp3"


const AudioPlayer = () => {
  const audioRef = useRef(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; 
    }
  };

  return (
    <div>
      <audio ref={audioRef} src={audio1} hidden />
          <button onClick={playAudio}>Play Audio</button> 
          
      <button onClick={stopAudio}>Stop Audio</button>
    </div>
  );
};

export default AudioPlayer;
