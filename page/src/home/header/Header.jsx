import React from 'react'
import './header.scss'
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <div className='header'>
      <div className="box">
        <h2>CONCESSIONÁRIA AUTORIZADA <span>WEB MOTORS</span></h2>
        <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro minus labore debitis</h3>
        <a href="#produtos">
          <button>
            ver ofertas
          </button> </a>
      </div>
       
    </div>
  )
}
