import React from 'react'
import MainLogo from "../assets/puzzle.png";
import HelpLogo from "../assets/question.png";
import DonateLogo from "../assets/heart.png";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div style={{ position: "absolute", width: "100%" }} >
      <Link to="/" style={{ textDecoration: "none", color: "black", width:"18vw", display:"flex" }}>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginLeft: "4vh" }}>
          <img src={MainLogo} alt='' style={{ height: "5vh" }} />
          <h1 style={{ marginLeft: "1.5vh", fontSize: "3.5vh" }}>PlayGame</h1>
        </div></Link>
      <div style={{ position: "relative", display: "flex", float: "right", alignItems: "center", top: "-6vh" }}>
        <Link to="/Help"><img style={{ height: "4vh", marginRight: "3vh", cursor: "pointer" }} src={HelpLogo} alt='' /></Link>
        <img style={{ height: "4vh", marginRight: "4vh", cursor: "pointer" }} src={DonateLogo} alt='' />
      </div>
    </div>
  )
}

export default Navbar;