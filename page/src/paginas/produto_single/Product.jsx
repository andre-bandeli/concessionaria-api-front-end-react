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
    const url = `https://springboot-api-crud-java-react-production.up.railway.app/api/v1/moto/${id}`;

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
                <div className="typed-div">
                    <h3>{produto.descricao}</h3>
                </div>
                <br/>
                
                <div className='btn'>
                  <button>
                    ver ficha técnica
                  </button>

                </div>
            </div>
        </div>
        <div className="especificacoes">
            <div className="box-esp"> 
                <h3> Quilometragem: <span>{produto.quilometragem}</span> </h3>
            </div>
            <div className="box-esp">
              <h3> Ano: <span>{produto.ano}</span></h3>
            </div>
            <div className="box-esp">
              <h3> Injeção Eletrônica: <span>{produto.injecao}</span></h3>
            </div>
            <div className="box-esp">
              <h3> Freio: <span>{produto.freio}</span> </h3>
            </div>
            <div className="box-esp">
              <h3> Cilindrada: <span>{produto.cilindradas}</span></h3>
            </div>
            <div className="box-esp">
              <h3> Valor: <span>{produto.preco}</span></h3>
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

        <div className="iframe">
            <iframe src="https://www.youtube.com/embed/lGbla9PCJN4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

        <div className="descricao">
          <div className="container-descricao">
            <div className="box-text">

                  <h2>Economia</h2>
                  <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error itaque iure fugiat nesciunt omnis doloremque! Velit quos blanditiis dolores neque nihil perferendis repudiandae reprehenderit, alias, veritatis unde nostrum eligendi minima?</h3>
                  <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error itaque iure fugiat nesciunt omnis doloremque! Velit quos blanditiis dolores neque nihil perferendis repudiandae reprehenderit, alias, veritatis unde nostrum eligendi minima?</h3>
                  
              </div>
            <div className="box-imagem">

            </div>
          </div>
        </div>
    </div>
  )
}
