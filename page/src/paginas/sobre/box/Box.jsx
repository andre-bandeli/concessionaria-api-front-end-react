import React from 'react'
import './box.css'
import valores from '../../../components/assets/images/sede.webp'
import team from '../../../components/assets/images/team.webp'
import financeiro from '../../../components/assets/images/financeiro.webp'
import member from '../../../components/assets/images/membro.webp'
import team_ from '../../../components/assets/images/team_.webp'
import time from '../../../components/assets/images/time.webp'

export default function Box() {
  return (
    <div className='box_sobre'>
        <div className="box_info">
            <img src={valores}alt="" />
            <h2>Concessionárias</h2>
        </div>
        <div className="box_info">
            <img src={team} alt="" />
            <h2>Nosso Time</h2>
        </div>
        <div className="box_info">
            <img src={financeiro} alt="" />
            <h2>Parceiros Financeiros</h2>
        </div>
        <div className="box_info">
            <img src={team_} alt="" />
            <h2>Oficinas e Lojas</h2>
        </div>

        <div className="box_info">
            <img src={member} alt="" />
            <h2>Seja membro</h2>
        </div>
        <div className="box_info">
            <img src={time} alt="" />
            <h2>Trabalhe Conosco!</h2>
        </div>

    </div>
  )
}
