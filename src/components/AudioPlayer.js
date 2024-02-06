

// AudioPlayer.js
import React, { useState, useEffect, useRef } from 'react';
import ChooseFile from './ChooseFile';
import Playlist from './Playlist';
import NowPlaying from './NowPlaying';

const AudioPlayer = () => {
  const [audioFiles, setAudioFiles] = useState([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  //const [isPlaying, setIsPlaying] = useState(false);
  //const [playbackPosition, setPlaybackPosition] = useState(0); // New state to store playback position
  const audioRef = useRef(null);
  //console.log("hello ji kaise ho")
  useEffect(() => {
    //console.log("local se nikal rha")
    const savedAudioFiles = JSON.parse(localStorage.getItem('audioFiles')) || [];
    const savedCurrentTrackIndex = parseInt(localStorage.getItem('currentTrackIndex')) || 0;
    setAudioFiles(savedAudioFiles);
    setCurrentTrackIndex(savedCurrentTrackIndex);
    console.log(savedAudioFiles)
  }, []);

  useEffect(() => {
    console.log("lacal me bhej rha hu")
    //localStorage.setItem('audioFiles', JSON.stringify(audioFiles));
    localStorage.setItem('audioFiles', JSON.stringify(audioFiles));
   // console.log('ab audiofile dekhta hu')
    //onsole.log(audioFiles)
  }, [audioFiles]);

  useEffect(() => {
    localStorage.setItem('currentTrackIndex', currentTrackIndex);
  }, [currentTrackIndex]);

  // useEffect(() => {
  //   if (isPlaying) {
  //     audioRef.current.currentTime = playbackPosition;
  //     audioRef.current.play();
  //   } else {
  //     audioRef.current.pause();
  //   }
  // }, [isPlaying, playbackPosition]);

  const handleFileChange = (e) => {
    const files = e.target.files;
    setAudioFiles([...audioFiles, ...files]);
  };

  const handleEnded = () => {
    if (currentTrackIndex < audioFiles.length - 1) {
      setCurrentTrackIndex(currentTrackIndex + 1);
    } else {
      setCurrentTrackIndex(0);
    }
  };

  return (
    <div className="w-full h-full flex">
      <div className='bg-yellow-200 w-[33%] h-full m-2'>
        <ChooseFile handleFileChange={handleFileChange} />
      </div>

      <div className='bg-yellow-200 w-[33%] h-full m-2'>
        <Playlist audioFiles={audioFiles} setCurrentTrackIndex={setCurrentTrackIndex} />
      </div>

      <div className='bg-yellow-200 w-[33%] h-full m-2'>
        <NowPlaying
          audioFile={audioFiles[currentTrackIndex]}
          // isPlaying={isPlaying}
          // handlePlay={handlePlay}
          // handlePause={handlePause}
           handleEnded={handleEnded}
          audioRef={audioRef}
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
