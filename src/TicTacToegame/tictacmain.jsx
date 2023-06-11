import React from 'react'
import Board from './components/BoardTictac';
import "./tictac.css";
import gamelogo from "./assets/tictactoelogo.png";
import { motion } from 'framer-motion';

function tictacmain() {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className='tictacmain'>
      <motion.header initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.5, delay:.5}}>Tic - Tac - Toe</motion.header>
       <img style={{height:"5.8vh",position:'relative', margin:"10px"}} src={gamelogo} alt=''/>
       <Board/>
       <button className='playagain' onClick={refreshPage}>Reset</button>
    </div>
  )
}

export default tictacmain;