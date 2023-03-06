import { useState } from 'react';
import './App.css';
import Board from './components/Board';
import GameOverScreen from './components/GameOverScreen';

function App() {
  const [win, setWin] = useState('')

  const returnWinner = (winner) => {
    setWin(winner)
  }

  return (
    <div className='app'>
      <Board returnWinner={returnWinner}/>
      {win !== '' && <GameOverScreen winner={win}/>}
    </div>

  );
}

export default App;
