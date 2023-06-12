import React from 'react'
import BoardView from './components/Board2048'
import "./main2048.css";
import "./style2048.scss";
import { motion } from 'framer-motion';
import Navbar from '../Widgets/Navbar';
import Botbar from '../Widgets/Botbar';

function game2048() {
  return (
    <>
    <Navbar />
    <div className='main248'>
      <motion.div className='head2048' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1, delay:.5}}>2048</motion.div>
      <BoardView />
    </div>
    <Botbar />
    </>
  )
}

export default game2048;