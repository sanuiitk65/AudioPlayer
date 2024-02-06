// Playlist.js
import React from 'react';

const Playlist = ({ audioFiles, setCurrentTrackIndex }) => {
  return (
    <div className="mx-2">
      <h2>Playlist</h2>
      <ul>
        {audioFiles.map((file, index) => (
          <li
            key={index}
            onClick={() => {
              setCurrentTrackIndex(index);
            }}
            className="cursor-pointer"
          >
            {index+1} {file.name}
            {/* <button onClick={() => setCurrentTrackIndex(index)}>Play</button> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
