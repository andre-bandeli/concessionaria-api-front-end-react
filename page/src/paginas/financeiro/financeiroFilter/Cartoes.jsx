import React from 'react'
import './cartoes.scss'
import bradesco_logo from '../../../components/assets/images/bradesco_logo.webp'
import chip from '../../../components/assets/images/chip.webp'
import itau_logo from '../../../components/assets/images/itau_logo.webp'
import mastercard from '../../../components/assets/images/mastercard.webp'
import nu_logo from '../../../components/assets/images/nu.webp'
import bradesco from '../../../components/assets/images/bradesco.webp'
import nubank from '../../../components/assets/images/Nubank.webp'
import itau from '../../../components/assets/images/itau.webp'


export default function Cartoes() {
  return (
    <div className='cartoes'>
        <div className="cards-financiamento">
            <div className="text-f">
                <h2>
                    TRABALHAMOS COM OS <br/><span>PRINCIPAIS BANCOS</span>
                </h2>
            </div>

            <div className="cart">

            
             <div className="banks">
            
                  <div className="box-cartoes">
                      <div className="nubank">
                        <img src={nubank} alt="" />
                        <h2>Seguro Nubank</h2>
                            <div className="cartao-principal">
                                <div className="line-1-nu">
                                    <img src={mastercard} alt="" />
                                </div>
                                <div className="line-2-nu">
                                    <img src={chip} alt="" />
                                </div>
                                <div className="line-3-nu">
                                    <img src={nu_logo} alt="" />
                                </div>
                            </div>
                      </div>
                      <div className="itau">
                        <img src={itau} alt="" />
                            <h2>Crédito Itau</h2>
                            <div className="cartao-principal">
                                <div className="line-1-itau">
                                    <img src={itau_logo} alt="" />
                                </div>
                                <div className="line-2-itau">
                                    <img src={chip} alt="" />
                                </div>
                                <div className="line-3-itau">

                                    <div className="line-3-itau-dark">
                                        <h2>Click</h2>
                                    </div>
                                    
                                </div>
                            </div>
                      </div>
                      <div className="bradesco">
                        <img src={bradesco} alt="" />
                        <h2>Consórcio Bradesco</h2>
                            <div className="cartao-principal">
                                <div className="line-1-br">
                                    <img src={bradesco_logo} alt="" />
                                </div>
                                <div className="line-2-br">
                                    <img src={chip} alt="" />
                                </div>
                            </div>
                      </div>
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}
