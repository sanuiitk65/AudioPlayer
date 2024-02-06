// App.js
import React from 'react';
import "./App.css";
import AudioPlayer from './components/AudioPlayer';

function App() {
  return (
    <div className=' w-[100vw] h-[100vh] m-0'>
      <h1 className="bg-red-500 text-[30px] font-bold flex justify-center">Audio Player App</h1>
    
      <AudioPlayer className="m-2" />
    </div>
  );
}

export default App;
