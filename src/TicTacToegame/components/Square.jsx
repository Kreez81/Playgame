import React from 'react'
import { motion } from "framer-motion";

const Square = (props) => {
  return (
    <motion.div whileTap={{ scale:-4,transition:{duration:1} }} className='Squarebox' onClick={props.onClick}>
        <h4>{props.value}</h4>
    </motion.div>
  )
}

export default Square;