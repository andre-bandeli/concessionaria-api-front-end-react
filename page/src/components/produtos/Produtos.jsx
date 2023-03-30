import React from 'react'
import './produtos.scss'
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import moto from './assets/moto.webp'
import moto1 from './assets/moto1.webp'
import moto4 from './assets/moto4.webp'


import ProdutosCategoriaList from '../../components/produtos/ProdutosCategoriaList';

export default function Produtos() {


    const[produto,setProduto]=useState([])
    const [selected, setSelected] = useState("motos");

    const imagens = [moto, moto1, moto4];


    const list = [
        {
        id: "motos",
        title: "Motocicletas",
        },
        {
        id: "yamaha",
        title: "Yamaha",
        },
        {
        id: "honda",
        title: "Honda",
        },
        {
        id: "bmw",
        title: "BMW Motorrad",
        },
    ];



    useEffect(() => {
        switch (selected) {
            case "motos":
                fetch('https://concessionaria-spring-boot-production.up.railway.app/api/v1/moto/list')
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(response.statusText);
                        }
                        return response.json();
                    })
                    .then((result)=>{
                        setProduto(result);
                    })
                    .catch((error) => {
                        console.error(error);
                      });
                    break;
            case "yamaha":
                fetch('https://concessionaria-spring-boot-production.up.railway.app/api/v1/moto/list/yamaha')
                .then(response => {
                    if (!response.ok) {
                        throw new Error(response.statusText);
                    }
                    return response.json();
                })
                .then((result)=>{
                    setProduto(result);
                })
                .catch((error) => {
                    console.error(error);
                  });
                break;
            case "honda":
                fetch('https://concessionaria-spring-boot-production.up.railway.app/api/v1/moto/list/honda')
                .then(response => {
                    if (!response.ok) {
                        throw new Error(response.statusText);
                    }
                    return response.json();
                })
                .then((result)=>{
                    setProduto(result);
                })
                .catch((error) => {
                    console.error(error);
                  });
                break;
            case "bmw":
                fetch('https://concessionaria-spring-boot-production.up.railway.app/api/v1/moto/list/bmw')
                .then(response => {
                    if (!response.ok) {
                        throw new Error(response.statusText);
                    }
                    return response.json();
                })
                .then((result)=>{
                    setProduto(result);
                })
                .catch((error) => {
                    console.error(error);
                  });
                break;
            default:
                fetch('https://concessionaria-spring-boot-production.up.railway.app/api/v1/moto/list/list')
                .then(response => {
                    if (!response.ok) {
                        throw new Error(response.statusText);
                    }
                    return response.json();
                })
                .then((result)=>{
                    setProduto(result);
                })
                .catch((error) => {
                    console.error(error);
                  });
        }
    }, [selected]);


  return (
    <div className="produtosIndex" id='produtos'>

        <div className="containerProdutosIndex">

            <div className="titleProdutosIndex">

                <h2>Motocicletas</h2>
                <h3>Confira alguns de nossos modelos disponíveis</h3>

            </div>
            <div className='filterProdutos'>
                <ul>
                    {list.map((item) => (
                    <ProdutosCategoriaList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                    ))}
                </ul>
            </div>
           
            <div className="productIndex">

            {produto.slice(0, 8).map(produto=>(

                <div className="boxIndex">

                    <div className="imagem">
                            <img src={imagens[Math.floor(Math.random() * imagens.length)]} alt="" />
                    </div>
                    <div className="infos">
                        <div className="marca">
                            <h3>{produto.marca}</h3>
                        </div>
                        <div className="modelo">
                            <h2>{produto.nome_modelo}</h2>
                        </div>
                        <div className="preco">
                            <h3>A partir de <span>R$ {produto.preco}</span></h3>
                            <h4>Condições especiais para clientes web motors. Confira as condições de pagamento</h4>
                        </div>
                        <div className="condicoes">
                                <Link to={`/produto/${produto.id}`}>
                                <button>
                                    ver detalhes
                                </button>
                                
                            </Link>
                        </div>
                    </div>

                </div>
            ))
            }
              
            </div>
        </div>

    </div>
  )
}
