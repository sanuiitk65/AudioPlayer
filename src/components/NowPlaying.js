// // NowPlaying.js
import React from 'react';
import {useState, useEffect, useRef } from 'react';

const NowPlaying = ({ audioFile, audioRef, handleEnded}) => {

    const [isPlaying, setIsPlaying] = useState(false);
    
  return (
    <div className='mx-2'>
      <h2>Now Playing</h2>
      {audioFile && (
        <div>
          <audio
            controls
            progress = "true"
            src={URL.createObjectURL(audioFile)}
            onPlay={()=>{
                setIsPlaying(true);
            }}
            onEnded={handleEnded}
            autoPlay = {isPlaying}
            
            //autoPlay={isPlaying}
            ref={audioRef}
          />
        </div>
      )}
    </div>
  );
};

export default NowPlaying;





