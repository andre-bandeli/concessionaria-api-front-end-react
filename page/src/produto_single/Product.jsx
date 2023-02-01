import React from 'react'
import './product.scss'
import moto from './moto.png'
import { useEffect, useState } from 'react';

import mt1 from './mt-5.jpg'
import mt2 from './mt-2.jpg'
import mt3 from './moto.jpg'
import mt4 from './mt6.jpg'

export default function Product() {

    const[nome_modelo,setNome_modelo]=useState('')
    const[preco,setPreco]=useState('')
    const[descricao,setDescricao]=useState('')
    const[produto,setProduto]=useState([]);

    const handleClick=(e)=>{
      e.preventDefault()
      const produto={nome_modelo,preco, descricao}
      console.log(produto)
      fetch("http://localhost:8080/api/produto/add",{
        method:"POST",
        mode: 'no-cors',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify("produto" + produto)
  
    }).then(()=>{
      console.log("Novo produto adicionado.")
    })
  }

    useEffect(()=>{
        fetch("http://127.0.0.1:8085/api/v1/moto/1")
        .then(res=>res.json())
        .then((result)=>{
          setProduto(result);
          console.log(produto)
        }
      )
    },[])


  return (
    <div className='product'>
        <div className="container-single">
            <div className="imagem_produto">
           
            </div>
            <div className="dados">
       
                <h1>
                    {produto.nome_modelo}
                </h1>
                <h2>à partir de: <span>R$ {produto.preco}</span></h2>
                <div className='btn'>
                  <button>
                    ver ficha técnica
                  </button>

                </div>
            </div>
        </div>

        <div className="fotos">
          <div className="box">
            <img src={mt1} alt="" />
          </div>
          <div className="box">
            <img src={mt2} alt="" />
          </div>
          <div className="box">
            <img src={mt3} alt="" />
          </div>
          <div className="box">
            <img src={mt4} alt="" />
          </div>
        </div>

        <div className="ficha">
          <h2>Ficha Técnica</h2>
            <div className="containerFichaTecnica">
              <ul>
                <ul className='ul-dark'>
                    <li className='li-nome-coluna'>
                      <h2>Modelo</h2>

                    </li>
                    <li>
                      
                    </li>
                </ul>
                <ul className='ul-dark'>
                    <li className='li-nome-coluna'>
                      <h2>Ano</h2>
                    </li>
                    <li>
                      
                    </li>
                </ul>
                <ul className='ul-dark'>
                    <li className='li-nome-coluna'>
                        <h2>Cilindradas</h2>
                    </li>
                    <li>
                      
                    </li>
                </ul>
                <ul className='ul-dark'>
                    <li className='li-nome-coluna'>
                      <h2>KM</h2>
                    </li>
                    <li>
                      
                    </li>
                </ul>
                <ul className='ul-dark'>
                    <li className='li-nome-coluna'>

                    </li>
                    <li>
                      
                    </li>
                </ul>
                <ul className='ul-dark'>
                    <li className='li-nome-coluna'>

                    </li>
                    <li>
                      
                    </li>
                </ul>
                <ul className='ul-dark'>
                    <li className='li-nome-coluna'>

                    </li>
                    <li>
                      
                    </li>
                </ul>
               
              </ul>
            </div>
        </div>
    </div>
  )
}
