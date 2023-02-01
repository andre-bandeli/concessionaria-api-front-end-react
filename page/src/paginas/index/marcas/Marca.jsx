import React from 'react'
import './marca.scss'

import bmw from './assets/bmw.webp'
import honda from './assets/honda.webp'
import yamaha from  './assets/yamaha.webp'
import volw from  './assets/vw.webp'
import audi from  './assets/audi.webp'
import jeep from  './assets/jeep.webp'
import mit from  './assets/mit.webp'
import ferrari from  './assets/ferrari.webp'

export default function Marca() {
  return (
    <div className='marca'>

        <div className="title">

          <h2>Consulta por Marcas</h2>
          <h3>Essas são as marcas com as quais trabalhamos</h3>

        </div>

        <div className="container-marcas">
              <div className="card">
                  <img src={bmw} alt="" />
              </div>
              <div className="card">
                 <img src={honda} alt="" />

              </div>
              <div className="card">
                 <img src={volw} alt="" />

              </div>
              <div className="card">
                 <img src={yamaha} alt="" />

              </div>
              <div className="card">
                 <img src={audi} alt="" />

              </div>
              <div className="card">
                 <img src={jeep} alt="" />

              </div>
              <div className="card">
                 <img src={mit} alt="" />

              </div>
              <div className="card">
                 <img src={ferrari} alt="" />

              </div>
             
        </div>

    </div>
  )
}
