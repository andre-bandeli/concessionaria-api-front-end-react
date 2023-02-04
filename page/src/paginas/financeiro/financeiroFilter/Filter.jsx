import React from 'react'
import './filter.scss'
import { useEffect, useState } from 'react';
import FormularioFinanciamento from '../formulario/FormularioFinanciamento'
import iconarrow from '../../../components/produtos/arrow.png'
import { Link } from "react-router-dom";
import itau from '../../../components/assets/images/itau_logo.webp'
import chip from '../../../components/assets/images/chip.webp'
import mastercard from '../../../components/assets/images/mastercard.webp'
import nubank from '../../../components/assets/images/nu.webp'
import bradesco from '../../../components/assets/images/bradesco_logo.webp'
import Nubank from '../../../components/assets/images/Nubank.webp'
import Itau from '../../../components/assets/images/itau.webp'
import Bradesco from '../../../components/assets/images/bradesco.webp'



import {
    Consorcio,
    Financiamento,
} from './data';
import FilterList from './FilterList';
import Cartoes from './Cartoes';

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

                        <Cartoes/>

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
