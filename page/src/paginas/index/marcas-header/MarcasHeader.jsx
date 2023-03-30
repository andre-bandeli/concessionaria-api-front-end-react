import React from 'react'
import './marcasHeader.scss'

export default function MarcasHeader() {
  return (
    <div className='flex-container'>
        <div className="flex-box">
            <h2>Motocicletas</h2>
        </div>
        <div className="flex-box">
            <h2>Veículos</h2>
        </div>
        <div className="flex-box">
            <h2>Financiamentos</h2>
        </div>
        <div className="flex-box">
            <h2>Consórcios</h2>
        </div>
        <div className="flex-box">
            <h2>Contatos</h2>
        </div>
    </div>
  )
}
