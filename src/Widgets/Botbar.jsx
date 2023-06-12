import React from 'react'
import Onion from "../assets/onion.png";
import GithubLogo from "../assets/github.png";
import LinkLogo from "../assets/linkedin.png";

function Botbar() {

  return (
    <div style={{ position: "sticky", width: "100%", bottom: "2.5vh"}}>
      <text style={{ marginLeft: "5vh", marginBottom: "2vh", fontWeight: "500" }}>Designed and Created || KARAN
        <img src={Onion} alt='' style={{ height: "2.2vh", marginLeft: "1vh", top: "3px", position: "relative" }} />
      </text>
      <div style={{ display: "flex", float: "right", marginRight: "4.5vh", fontWeight: "500" }}>
        <a href='https://github.com/Kreez81' target="_blank" rel="noopener noreferrer" style={{color:"black", textDecoration:"none"}}>
          <img src={GithubLogo} alt='' style={{ height: "2vh", marginLeft: "1vh", marginRight: ".5vh", top: "4px", position: "relative", backgroundColor: "rgb(235, 224, 237)", borderRadius: "20%" }} />
          Github
        </a>
        <a href='https://www.linkedin.com/in/karan-pawar-212599219/' target="_blank" rel="noopener noreferrer" style={{color:"black", textDecoration:"none"}}>
          <img src={LinkLogo} alt='' style={{ height: "2vh", marginLeft: "3vh", marginRight: ".5vh", top: "4px", position: "relative", backgroundColor: "rgb(235, 224, 237)", borderRadius: "20%" }} />
          Linkedin
        </a>
      </div>
    </div>
  )
}

export default Botbar;