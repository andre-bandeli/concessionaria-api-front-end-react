import React from 'react'
import './filter.scss'
import { useEffect, useState } from 'react';
import FormularioFinanciamento from '../formulario/FormularioFinanciamento'
import iconarrow from '../../../components/produtos/arrow.png'
import { Link } from "react-router-dom";
import itau from '../../../components/assets/images/itau.png'
import chip from '../../../components/assets/images/chip.png'
import mastercard from '../../../components/assets/images/mastercard.png'
import nubank from '../../../components/assets/images/nu.png'
import bradesco from '../../../components/assets/images/bradesco.png'
import Nubank from '../../../components/assets/images/Nubank.jpg'
import Itau from '../../../components/assets/images/itau.webp'
import Bradesco from '../../../components/assets/images/bradesco.jpg'



import {
    Consorcio,
    Financiamento,
} from './data';
import FilterList from './FilterList';

export default function Produtos() {

    const [selected, setSelected] = useState("Financiamento");
    const [data, setData] = useState([]);
    const list = [
        {
        id: "Financiamento",
        title: "Financiamentos",
        },
        {
        id: "Consorcio",
        title: "Consórcios",
        },
    ];

    useEffect(() => {
        switch (selected) {
        case "Financiamento":
            setData(Financiamento);
            break;
        case "Consorcio":
            setData(Consorcio);
            break;
        default:
            setData(Financiamento);
        }
    }, [selected]);

  return (
    <div id='filter' className='filterFinanceiro'>

        <div className="header_financeiro">
            <div className="container-filter">
                <h1>Confira nossas condições financeiras!</h1>
                <ul>
                    {list.map((item) => (
                    <FilterList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                    ))}
                </ul>
            </div>
        </div>


        <div className="container-financeiro">
            <div className="text">
                <div className="menu">
                        <Link to="/">
                            <h2>Home</h2>
                        </Link>
                        <img src={iconarrow} alt="" />
                        <h2>Financeiro</h2>

                    </div>
                    <h2>{selected}</h2>
                </div>
               {selected === "Financiamento" ? (
                    data.map((d) => (
                    <div className="box">
                        <h2>{d.title}</h2>
                        <h3>{d.paragrafo_1}</h3>

                        <div className="cards-financiamento">
                            <div className="text-f">
                                <h2>
                                    TRABALHAMOS COM OS <br/><span>PRINCIPAIS BANCOS</span>
                                </h2>

                            </div>
                            <div className="cards">
                               
                                    <div className="box-f-nu">

                                        <div className="cartao">
                                            <div className="line">
                                                <img src={mastercard} alt="" />
                                            </div>
                                            <div className="line">
                                                <img src={chip} alt="" className='chip'/>
                                            </div>
                                            <div className="line">
                                                <div className="contorno">
                                                    <img src={nubank} alt="" />
                                                    <div className="contorno-interno">
                                                        <h2>João J. Silva</h2>
                                                    </div>
                                                   
                                                </div>  
                                            </div>
                                        </div>

                                        <div className="bankimage">
                                            <img src={Nubank} alt="" />
                                        </div>
                                        <div className="bankname">
                                            <h2>Nubank <br /> Seguros</h2>
                                        </div>
                                       
                                    </div>
                                <div className="box-f-it">

                                        <div className="cartao">
                                            <div className="line">
                                                <img src={itau} alt="" />
                                            </div>
                                            <div className="line">
                                                <img src={chip} alt="" className='chip'/>
                                            </div>
                                            <div className="line">
                                                <div className="contorno">
                                                    <div className="contorno-interno">
                                                        <h2>Click</h2>
                                                    </div>
                                                    <div className="circle-master">
                                                        <img src={mastercard} alt="" />
                                                    </div>
                                                </div>  
                                            </div>
                                        </div>
                            
                                    <div className="bankimage">
                                        <img src={Itau} alt="" />
                                    </div>
                                    <div className="bankname">
                                        <h2>Linha de Crédito Itau</h2>
                                    </div>
                                    <div className="banktext">

                                    </div>        

                                </div>
                                <div className="box-f-br">
                                    <div className="cartao">
                                                <div className="line">
                                                    <img src={bradesco} alt="" />
                                                </div>
                                                <div className="line-chip">
                                                    <img src={chip} alt=""/>
                                                </div>
                                               
                                            </div>
                                    <div className="bankimage">
                                        <img src={Bradesco} alt="" />
                                    </div>
                                    <div className="bankname">
                                        <h2>Bradesco Financiamentos</h2>
                                    </div>
                                    <div className="banktext">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <h3>{d.paragrafo_2}</h3>

                        <FormularioFinanciamento/>
                    </div>
                    ))
                ) : (
                    
                    data.map((d) => (
                        <div className="box">
                            <h2>{d.title}</h2>
                            <h3>{d.paragrafo_1}</h3>
                            <h3>{d.paragrafo_2}</h3>

                            <div className='bx_box'>
                               <div className='bx'>
                                    <h2>Clausulas contratuais</h2>
                               </div>
                               <div className='bx'>
                                    <h2>Clausulas contratuais</h2>
                               </div>
                               <div className='bx'>
                                    <h2>Clausulas contratuais</h2>
                               </div>
                               <div className='bx'>
                                    <h2>Clausulas contratuais</h2>
                               </div>
                               <div className='bx'>
                                    <h2>Clausulas contratuais</h2>
                               </div>
                               <div className='bx'>
                                    <h2>Clausulas contratuais</h2>
                               </div>
                            </div>
                        </div>
                        ))
                        
                )}
        </div>
    </div>
  )
}
