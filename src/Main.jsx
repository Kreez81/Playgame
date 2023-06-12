import React from 'react'
import Navbar from './Widgets/Navbar';
import Botbar from './Widgets/Botbar';

function Main() {
  return (
    <>
    <Navbar />
    <div style={{backgroundColor:"rgb(173, 139, 224)", height:"100vh"}}></div>
    <Botbar />
    </>
  )
}

export default Main;