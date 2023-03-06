import React, { useState } from 'react';
import './Square.css'

const Square = (props) => {
    const [atualSymbol, setAtualSymbol] = useState('')
    const [wasClicked, setWasClicked] = useState(false);
    const [color, setColor] = useState('black');

    const handleButtonClick = () => {
        setWasClicked(true)
        setColor('black')
        let list = props.onClick(props.index)
        setAtualSymbol(list[props.index].symbol)
    }

    const handleMouseOver = () => {
        if(atualSymbol === ''){
            setColor('lightgray')
            props.onMouseOver(setAtualSymbol)

        }
    }

    const handleMouseOut = () => {
        if(wasClicked === false){
            props.handleMouseOut(setAtualSymbol)
        }
    }

    return <button style={{color: color}} onMouseOut={handleMouseOut} onClick={handleButtonClick} onMouseOver={handleMouseOver}>{atualSymbol}</button>;
}
 
export default Square;