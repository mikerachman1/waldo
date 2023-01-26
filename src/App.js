import './App.css';
import Header from './Header';

function App() {
  return (
    <div className='App'>
      <h1>Where's Waldo</h1>
      <Header />
      <div id='search-pic'>
        <button className='char-button' 
                id='waldo-btn'></button>
        <button className='char-button' 
                id='wenda-btn'></button>
        <button className='char-button'
                id='wizard-btn'></button>
        <button className='char-button'
                id='odlaw-btn'></button>
      </div>
    </div>
  );
}

export default App;
