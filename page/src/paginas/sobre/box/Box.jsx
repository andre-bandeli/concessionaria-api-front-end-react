import React from 'react'
import './box.scss'
import valores from './sede.png'
import imagem from './imagem1.webp'
import imagem2 from './team.webp'
import financeiro from './financeiro.webp'
import time from './time.webp'
import member from './member.jpg'
import team from './team.jpg'

export default function Box() {
  return (
    <div className='box_sobre'>
        <div className="box_info">
            <img src={valores}alt="" />
            <h2>Concessionárias</h2>
        </div>
        <div className="box_info">
            <img src={time} alt="" />
            <h2>Nosso Time</h2>
        </div>
        <div className="box_info">
            <img src={financeiro} alt="" />
            <h2>Parceiros Financeiros</h2>
        </div>
        <div className="box_info">
            <img src={imagem2} alt="" />
            <h2>Oficinas e Lojas</h2>
        </div>

        <div className="box_info">
            <img src={member} alt="" />
            <h2>Seja membro</h2>
        </div>
        <div className="box_info">
            <img src={team} alt="" />
            <h2>Trabalhe Conosco!</h2>
        </div>

    </div>
  )
}
