import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Leaderboard from './Leaderboard';

function App() {
  const [found, setFound] = useState(0);
  const [time, setTime] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleFind = (charName) => {
    const button = document.querySelector(`#${charName}-btn`)
    button.disabled = true;
    button.style.border = '5px solid black';
    document.querySelector(`#${charName}-sticky`).style.opacity = '0.2';
    setFound(found + 1);
  };

  // check for end game on every character find
  useEffect(() => {
    if (found === 4) { 
      console.log('end game')
      setGameOver(true); 
    }
  }, [found]);

  return (
    <div className='App'>
      <h1>Where's Waldo</h1>
      {/* replace null with leaderboard component */}
      {gameOver ? <Leaderboard time={time} /> : <Header time={time} setTime={setTime}/>}
      <div id='search-pic'>
        <button className='char-button' 
                id='waldo-btn'
                onClick={() => handleFind('waldo')}
                ></button>
        <button className='char-button' 
                id='wenda-btn'
                onClick={() => handleFind('wenda')}
                ></button>
        <button className='char-button'
                id='wizard-btn'
                onClick={() => handleFind('wizard')}
                ></button>
        <button className='char-button'
                id='odlaw-btn'
                onClick={() => handleFind('odlaw')}
                ></button>
      </div>
    </div>
  );
}

export default App;
