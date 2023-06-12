import React, { useState } from 'react'
import Square from "./Square";
import { motion } from 'framer-motion';

function Board() {

    const initialState = Array(9).fill(null);
    const [state, setState] = useState(initialState);
    const [isXTurn, setIsXTurn] = useState(true);

    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]

        ];

        for (let logic of winnerLogic) {
            const [a, b, c] = logic;
            if (!state.includes(null) && state[a] !== state[b] && state[a] !== state[c]) {
                return `No player`;
            }
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
                return state[a];
            }
        }
        return false;
    };
    const isWinner = checkWinner();

    const handleClick = (index) => {
        if (state[index] !== null) {
            return;
        }
        const copyState = [...state];
        copyState[index] = isXTurn ? "X" : "O";
        setState(copyState);
        setIsXTurn(!isXTurn);
    };
    const handleReset = () => {
        setState(initialState);
    };

    return (
        <>
            <motion.div initial={{ left: 150, opacity: 0 }} animate={{ left: 0, opacity: 1 }} transition={{ duration: 1, type: "spring", bounce: 0.4, delay: .5 }} className='Board-container'>
                {isWinner ? <motion.div
                    initial={{ opacity: 0, scale: .5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, type: "spring", bounce: 0.5 }}
                    className='winnerText'>
                    " {isWinner} " won the game<button onClick={handleReset} className='playagain'>Play again</button>
                </motion.div>
                    :
                    <>
                        <div className='Board-row'>
                            <Square onClick={() => handleClick(0)} value={state[0]} />
                            <Square onClick={() => handleClick(1)} value={state[1]} />
                            <Square onClick={() => handleClick(2)} value={state[2]} />
                        </div>
                        <div className='Board-row'>
                            <Square onClick={() => handleClick(3)} value={state[3]} />
                            <Square onClick={() => handleClick(4)} value={state[4]} />
                            <Square onClick={() => handleClick(5)} value={state[5]} />
                        </div>
                        <div className='Board-row'>
                            <Square onClick={() => handleClick(6)} value={state[6]} />
                            <Square onClick={() => handleClick(7)} value={state[7]} />
                            <Square onClick={() => handleClick(8)} value={state[8]} />
                        </div>
                    </>}
            </motion.div>
            <button className='playagain' onClick={handleReset}>Reset</button>
            </>
    )
}

export default Board;