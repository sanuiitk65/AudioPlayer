// // NowPlaying.js
import React from 'react';
import {useState, useEffect, useRef } from 'react';

const NowPlaying = ({ audioFile, audioRef, handleEnded}) => {

    const [isPlaying, setIsPlaying] = useState(false);
    const [playbackPosition, setPlaybackPosition] = useState(0);
    // useEffect(() => {
    //     if(audioRef.current){
    //         if (isPlaying) {
    //             audioRef.current.currentTime = playbackPosition;
    //             audioRef.current.play();
                
    //           } else {
    //             audioRef.current.pause();
    //             //console.log(audioRef.current)
    //           }
    //     }
    //   }, [isPlaying, playbackPosition]);

    //   const handleEnded = () => {
    //     if (currentTrackIndex < audioFiles.length - 1) {
    //       setCurrentTrackIndex(currentTrackIndex + 1);
    //     } else {
    //       setCurrentTrackIndex(0);
    //     }
    //   };



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





