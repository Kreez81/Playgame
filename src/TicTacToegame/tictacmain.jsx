import React from 'react'
import Board from './components/BoardTictac';
import "./tictac.css";
import gamelogo from "./assets/tictactoelogo.png";
import { motion } from 'framer-motion';
import Navbar from '../Widgets/Navbar';
import Botbar from '../Widgets/Botbar';

function tictacmain() {
  
  return (
    <>
    <Navbar />
    <div className='tictacmain'>
      <motion.header initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1, delay:.5}}>Tic - Tac - Toe</motion.header>
       <img style={{height:"5.8vh",position:'relative', margin:"10px"}} src={gamelogo} alt=''/>
       <Board/>
    </div>
    {/* <div style={{height:"10vh", backgroundColor:"black"}}>hey</div> */}
    <Botbar />
    </>
  )
}

export default tictacmain;