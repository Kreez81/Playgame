import React from 'react'
import Board from './components/Board';
import "./tictac.css";
import gamelogo from "../assets/tictactoelogo.png";

function tictacmain() {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className='tictacmain'>
      <header>Tic - Tac - Toe</header>
       <img style={{height:"5.5vh",position:'absolute',top:"15%"}} src={gamelogo} alt=''/>
       <Board/>
       <button className='playagain' onClick={refreshPage}>Reset</button>
    </div>
  )
}

export default tictacmain;