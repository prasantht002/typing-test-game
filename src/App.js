import { useState } from "react";

function App() { 
  const[winner,setWinner]=useState('')
  const[count,setCount]=useState(1);
  const[char,setChar]=useState('X')
  const[matrix,setMatrix]=useState([
    ['','',''],
    ['','',''],
    ['','',''],
  ])
  const getBGClass=(value)=>{
    if(value==='X') return 'yellow';
    if(value==='O') return 'orange'
  }
  const handleClick=(r,c)=>{
    console.log(count)
    if(matrix[r][c]) return
    const tmpMatrix=[...matrix]
    tmpMatrix[r][c]=char;
    setMatrix(tmpMatrix)
    setChar(char==='X'?'O':'X')
    setCount(count+1);
    
    checkWinner();
  }
  const checkWinner=()=>{
    if(matrix[0][0] && matrix[0][0]===matrix[0][1] && matrix[0][1]===matrix[0][2]){
      setWinner(matrix[0][0]+" is the winner  ")
    }
    if(matrix[1][0]&& matrix[1][0]===matrix[1][1] && matrix[1][1]===matrix[1][2]){
      setWinner(matrix[1][0]+" is the winner  ")
    }
    if(matrix[2][0] && matrix[2][0]===matrix[2][1] && matrix[2][1]===matrix[2][2]){
      setWinner(matrix[2][0]+" is the winner  ")
    }
    if(matrix[0][0] && matrix[0][0]===matrix[1][0] && matrix[1][0]===matrix[2][0]){
      setWinner(matrix[0][0]+" is the winner  ")
    }
    if(matrix[0][1] && matrix[0][1]===matrix[1][1] && matrix[1][1]===matrix[2][1]){
      setWinner(matrix[0][1]+" is the winner  ")
    }
    if(matrix[0][2] && matrix[0][2]===matrix[1][2] && matrix[1][2]===matrix[2][2]){
      setWinner(matrix[0][2]+" is the winner  ")
    }
    //check diagnol
    if(matrix[0][0] && matrix[0][0]===matrix[1][1] && matrix[1][1]===matrix[2][2]){
      setWinner(matrix[0][0]+" is the winner  ")
    }
    if(matrix[0][2] && matrix[0][2]===matrix[1][1] && matrix[1][1]===matrix[2][0]){
      setWinner(matrix[0][2]+" is the winner  ")
    }
    if(!winner && count === 9 ){
      setWinner("The Math is draw")
    }
  }
  const handleRestart=()=>{
    setMatrix([
      ['','',''],
      ['','',''],
      ['','',''],
    ])
    setChar('X')
    setWinner('')
    setCount(1);
  }
  return (

    <div className="app">

        <div className="header align-center">
          <h1>Tic tac toe</h1>
        </div>
        <div className="board align-center">
          {!winner && <h3>{char} turn</h3>}
          <div className="gameboard">
          {
          winner || matrix.map((row,rowIndex)=>(
            <div className="row">
              {row.map((element,colIndex)=>(
                <div 
                className={`cell align-center ${getBGClass(matrix[rowIndex][colIndex])}`}
                onClick={()=>handleClick(rowIndex,colIndex)}
                >
                  {element}
                  </div>
              ))}
            </div>
            ))
          }
          </div>
          <button 
          className="restart-btn"
          onClick={handleRestart}
          >Restart</button>
        </div>
    </div>
  );
}

export default App;
