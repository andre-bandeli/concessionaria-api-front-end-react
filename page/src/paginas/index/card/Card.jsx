import React from 'react'
import './card.scss'
import { Link } from "react-router-dom";

import moto from '../../../components/assets/images/moto.webp'
import carro from '../../../components/assets/images/carro.webp'

export default function Card() {
  return (
    <div className='card'>
        <div className="cardContainer">
            <div className="cardBoxContainerLeft">

                <div className="vehicleImg">
                    <img src={moto} alt="" />
                </div>
                <div className="CardVehicletext">
                    <h2>Motocicletas</h2>
                    <h3>Motocicletas 0 km e seminovas</h3>
                    <h4>Com pós venda e garantia de 2 anos, incluso revisões semenstrais</h4>
                    <button className='btn'>
                        <Link to="/motocicletas">
                                ver motociletas
                        </Link>
                    </button>
                </div>

            </div>
            <div className="cardBoxContainerRight">

                <div className="CardVehicletext">
                    <h2>Automoveis</h2>
                    <h3>Automoveis 0 km e seminovos</h3>
                    <h4>Com pós venda e garantia de 2 anos, incluso revisões semenstrais</h4>
                    <button className='btn'>
                    <Link to="/veiculos">
                                ver automoveis
                        </Link>
                    </button>
                </div>
                <div className="vehicleImg">
                        <img src={carro} alt="" />
                    </div>

                </div>
        </div>
    </div>
  )
}
