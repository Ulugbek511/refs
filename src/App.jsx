
import './App.css';
import React, { useState, useCallback } from 'react';
import Counter from "./components/counter";
import Todos from './components/Todos';
import AudioPlayer from './components/AudioPlayer';
import VideoPlayer from './components/VideoPlayer';


function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [count, setCount] = useState(0);
  const toggleMessage = useCallback(() => {
      setShowMessage(prevShowMessage => !prevShowMessage);
    }, []);
  
    const increment = useCallback(() => {
      setCount(prevCount => prevCount + 1);
    }, []);
  
  

     
    
  
  
  return (
    
 
  
   

    <div className="App">
      
      <h1>assalomu aleykum</h1>
        <button onClick={toggleMessage}>
          {showMessage ? 'Hide message' : 'Show message'}
        </button>
        {showMessage && <p>yaxshimsz oka😀😀😀</p>}
        
      <Counter count={count} increment={increment} />
      
      <br />
      
      <Todos />

      <hr />
      <br />
      <h1>Audio va Video player</h1>
      
      <div>
        <h2>Audio Player</h2>
        <AudioPlayer />
      </div>
      
      <div>
        <h2>Video Player</h2>
        <VideoPlayer />
      </div>

      </div>
    );
  }




export default App;
