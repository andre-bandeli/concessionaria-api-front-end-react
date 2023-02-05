import React from 'react'
import './filter.scss'
import { useEffect, useState } from 'react';
import FormularioFinanciamento from '../formulario/FormularioFinanciamento'


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
