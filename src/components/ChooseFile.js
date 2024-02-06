// ChooseFile.js
import React from 'react';

const ChooseFile = ({ handleFileChange }) => {
  return (
    <div className='flex justify-center'>
      <input type="file" accept="audio/*" onChange={handleFileChange} multiple />
    </div>
  );
};

export default ChooseFile;
