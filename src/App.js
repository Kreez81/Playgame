import React from 'react'
import Tictactoe from "./TicTacToegame/tictacmain";
import Main from "./Main";
import Game2048 from "./2048game/game2048";
import Help from './HelpPage/Help';
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";


function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Routes location={location} key={location.pathname}>
       <Route path="/" element = {<Main />} />
       <Route path="/TicTacToe" element={<Tictactoe />} />
       <Route path="/game2048" element={<Game2048 />} />
       <Route path="/help" element={<Help />} />
       </Routes>
    </div>
  );
}

export default App;
