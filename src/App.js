import React from 'react'
import Tictactoe from "./TicTacToegame/tictacmain";
// import game2048 from "./2048game/game2048";
import "./App.css";
// import { Routes, Route, useLocation } from "react-router-dom";


function App() {
  // const location = useLocation();

  return (
    <div className="App">
      {/* <Routes location={location} key={location.pathname}> */}
       <Tictactoe />
       {/* <Route path="/" element = {<Main />} />
       <Route path="/TicTacToe" element={<Tictactoe />} />
       <Route path="/game2048" element={<game2048/>} />
       </Routes> */}
    </div>
  );
}

export default App;
