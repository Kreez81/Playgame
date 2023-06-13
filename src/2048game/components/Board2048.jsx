import React, { useState } from "react";
import Tile from "./Tile";
import Cell from "./Square";
import { Board } from "../helper/index";
import useEvent from "../helper/useEvent";
import GameEnd from "./GameEnd";
import { motion } from 'framer-motion';

const BoardView = () => {
  const [board, setBoard] = useState(new Board());

  const handleKeyDown = (event) => {
    if (board.hasWon()) {
      return;
    }

    if (event.keyCode >= 37 && event.keyCode <= 40) {
      let direction = event.keyCode - 37;
      let boardClone = Object.assign(
        Object.create(Object.getPrototypeOf(board)),
        board
      );
      let newBoard = boardClone.move(direction);
      setBoard(newBoard);
    }
  };

  useEvent("keydown", handleKeyDown);

  const cells = board.cells.map((row, rowIndex) => {
    return (
      <div key={rowIndex}>
        {row.map((col, colIndex) => {
          return <Cell key={rowIndex * board.size + colIndex} />;
        })}
      </div>
    );
  });

  const tiles = board.tiles
    .filter((tile) => tile.value !== 0)
    .map((tile, index) => {
      return <Tile tile={tile} key={index} />;
    });

  const resetGame = () => {
    setBoard(new Board());
  };

  return (
    <div>
      <div className="details-box">
        <div className="resetButton" onClick={resetGame}>
          New Game
        </div>
        <div className="score-box">
          <div className="score-header">Score:</div>
          <div>{board.score}</div>
        </div>
      </div>
      <motion.div initial={{ left: 150, opacity: 0 }} animate={{ left: 0, opacity: 1 }} transition={{ duration: 1, type: "spring", bounce: 0.4, delay: .5 }} className="board">
        {cells}
        {tiles}
        <GameEnd onRestart={resetGame} board={board} />
      </motion.div>
    </div>
  );
};

export default BoardView;