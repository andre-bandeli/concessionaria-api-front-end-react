import React from 'react'
import './product.scss'
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";


import mt1 from '../../components/assets/images/mt-5.webp'
import mt2 from '../../components/assets/images/mt-2.webp'
import mt3 from '../../components/assets/images/moto.webp'
import mt4 from '../../components/assets/images/mt6.webp'

export default function Product() {

    const[produto,setProduto]=useState([]);

    const { id } = useParams();
    const url = `http://127.0.0.1:8085/api/v1/moto/${id}`;

    useEffect(()=>{
        fetch(url)
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
                <h2>por apenas<span>R$ {produto.preco}</span></h2>
                <div className='btn'>
                  <button>
                    ver ficha técnica
                  </button>

                </div>
            </div>
        </div>
        <div className="especificacoes">
            <div className="box-esp"> 
                <h3> Quilometragem: </h3>
            </div>
            <div className="box-esp">
              <h3> Ano: </h3>
            </div>
            <div className="box-esp">
              <h3> Injeção Eletrônica: </h3>
            </div>
            <div className="box-esp">
              <h3> Freio: </h3>
            </div>
            <div className="box-esp">
              <h3> Cilindrada: </h3>
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
                      <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut laborum, architecto quia ab nihil quo molestias.</h3>
                        
                    </li>
                </ul>
                <ul className='ul-dark'>
                    <li className='li-nome-coluna'>
                      <h2>Ano</h2>
                    </li>
                    <li>
                      <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut laborum, architecto quia ab nihil quo molestias.</h3>
                    </li>
                </ul>
                <ul className='ul-dark'>
                    <li className='li-nome-coluna'>
                        <h2>Cilindradas</h2>
                    </li>
                    <li>
                      <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut laborum, architecto quia ab nihil quo molestias.</h3>
                    </li>
                </ul>
                <ul className='ul-dark'>
                    <li className='li-nome-coluna'>
                      <h2>KM</h2>
                    </li>
                    <li>
                      <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut laborum, architecto quia ab nihil quo molestias.</h3>
                    </li>
                </ul>
                <ul className='ul-dark'>
                    <li className='li-nome-coluna'>
                       <h2>KM</h2>
                    </li>
                    <li>
                      <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut laborum, architecto quia ab nihil quo molestias.</h3>
                    </li>
                </ul>
                <ul className='ul-dark'>
                    <li className='li-nome-coluna'>
                      <h2>KM</h2>
                    </li>
                    <li>
                      <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut laborum, architecto quia ab nihil quo molestias.</h3>
                    </li>
                </ul>
                <ul className='ul-dark'>
                    <li className='li-nome-coluna'>
                      <h2>KM</h2>
                    </li>
                    <li>
                      <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut laborum, architecto quia ab nihil quo molestias.</h3>
                    </li>
                </ul>
               
              </ul>
            </div>
        </div>

        <div className="iframe">
        <iframe src="https://www.youtube.com/embed/lGbla9PCJN4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
  )
}
