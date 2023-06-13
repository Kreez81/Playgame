import React from 'react'
import Navbar from './Widgets/Navbar';
import Botbar from './Widgets/Botbar';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Main() {
  return (
    <>
      <Navbar />
      <div className='maindiv'>
        <div className='gamediv'>
          <Link to="/TicTacToe">
            <motion.div className='tictacbutt'
              initial={{ bottom: 150, opacity: 0 }} animate={{ top: 0, opacity: 1 }}
              transition={{ duration: 1, type: "spring", bounce: 0.4, delay: .5 }}
            >
              <header>TicTacToe</header>
            </motion.div>
          </Link>
        </div>
        <div className='gamediv'>
          <Link to="/game2048">
            <motion.div className='butt2048'
              initial={{ top: 150, opacity: 0 }} animate={{ top: 0, opacity: 1 }}
              transition={{ duration: 1, type: "spring", bounce: 0.4, delay: .5 }}
            >
              <header>2048</header>
            </motion.div>
          </Link>
        </div>
      </div>
      <Botbar />
    </>
  )
}

export default Main;