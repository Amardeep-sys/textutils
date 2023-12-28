import React, { useState } from "react";
import viteLogo from "/vite.svg"
import "../App.css"


function Navbar({text = 'Light Mode', fnctn , style}){
  
  
  return(

    <>
    <nav style={style}>
    <a href="#"><img src={viteLogo} alt="" /></a>
    <div className="navLinks" style={style}>
      <ul>
        <li><a style={style} href="#">Home</a></li>
        <li><a style={style} href="#">Application</a></li>
        <li><a style={style} href="https://www.react.dev">React</a></li>
        <li><a style={style} href="https://www.vitejs.dev">Vite</a></li>
      </ul>
      <button className='sign-btn' onClick={()=> fnctn()}>{text}</button>
    </div>
  </nav>
  </>
  )
}

export default Navbar;