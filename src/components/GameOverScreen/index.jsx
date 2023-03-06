import React from 'react';
import './GameOverScreen.css'

const GameOverScreen = (props) => {
    console.log(props.winner)
    return (
        <div className='screen'>
            {props.winner !== 'Velha' && <h1>O simbolo {props.winner} VENCEU!!!<br/> Parabens!</h1>}
            {props.winner === 'Velha' && <h1>O jogo deu velha ;/</h1>}
            <button onClick={() => window.location.reload(false)}>&#10227;</button>
        </div>
    );
}
 
export default GameOverScreen;