import Square from '../Square';
import './Board.css'

const Board = (props) => {
    let list = []
    let nineSquares = [];

    let turn = 'O';
    const handlePlay = (index) => {
        const copy = list.map((element) => {
            if(list[index].index === element.index && list[index].symbol === ''){
                turn = turn === 'X' ? 'O' : 'X';
                return {...element, symbol: turn}
            }else{
                return element
            }
        })
        list = copy
        verifyWinner()
        allSquareFilled()
        return list
    }

    const handleMouseOver = (setAtualSymbol) => {
        setAtualSymbol(turn === 'X' ? 'O' : 'X')
    }

    const handleMouseOut = (setAtualSymbol) => {
        setAtualSymbol('')
    }

    function createSquares(){
        for(let i = 0; i <= 8; i++){
            nineSquares.push(<Square handleMouseOut={handleMouseOut} onMouseOver={handleMouseOver} onClick={handlePlay} key={i} index={i}>{list.symbol}</Square>)
        }
    }
    createSquares()


    function createList(){
        nineSquares.forEach((element) => {
            list.push({index: element.props.index, symbol: ''})
        })
    }
    createList()

    let winner = ''
    function verifyWinner(){
        if(
        verifySequence(0, 1, 2)||
        verifySequence(3, 4, 5)||
        verifySequence(6, 7, 8)||
        verifySequence(0, 3, 6)||
        verifySequence(1, 4, 7)||
        verifySequence(2, 5, 8)||
        verifySequence(0, 4, 8)||
        verifySequence(2, 4, 6)){
            props.returnWinner(winner)
        }else if(allSquareFilled()){
            props.returnWinner('Velha')
        }
    }

    function verifySequence(a, b, c){
        if(list[a].symbol !== '' && list[a].symbol === list[b].symbol && list[b].symbol === list[c].symbol){
            winner = list[a].symbol
            return true
        }
    }

    function allSquareFilled(){
        let isFullFilled = true
        list.forEach((elemento) => {
            if(elemento.symbol === ''){
                isFullFilled = false
            }
        })

        return isFullFilled
    }
    
    return (
        <div className='board'>
            {nineSquares}
        </div>
    );
}
 
export default Board;