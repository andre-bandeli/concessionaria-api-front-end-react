import React from 'react'
import './produtos.scss'
import { useEffect, useState } from 'react';
import carro from './carro.webp'
import carro2 from './carro2.jpeg'
import carro3 from './carro3.png'
import carro4 from './carro4.png'
import carro5 from './carro5.png'
import carro6 from './carro6.png'
import carro7 from './carro7.png'
import { Link } from "react-router-dom";

import PortfolioList from './ProdutosCategoriaList';

export default function Veiculos() {

    const[produto,setProduto]=useState([])
    const [selected, setSelected] = useState("motos");

    const imagens = [carro, carro2, carro3, carro4, carro5, carro6, carro7];


    const list = [
        {
        id: "motos",
        title: "Carros",
        },
        {
        id: "yamaha",
        title: "Honda",
        },
        {
        id: "honda",
        title: "Audi",
        },
        {
        id: "bmw",
        title: "BMW",
        },
    ];


    useEffect(() => {
        switch (selected) {
            case "motos":
                fetch('https://springboot-api-crud-java-react-production.up.railway.app/api/v1/moto/list')
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
                fetch('https://springboot-api-crud-java-react-production.up.railway.app/api/v1/moto/list')
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
                fetch('https://springboot-api-crud-java-react-production.up.railway.app/api/v1/moto/list')
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
                fetch('https://springboot-api-crud-java-react-production.up.railway.app/api/v1/moto/list')
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
                fetch('https://springboot-api-crud-java-react-production.up.railway.app/api/v1/moto/list')
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
    <div className='produtos'>

        <div className="containerProdutos">

            <div className="titleProdutos">

                <h2>Veiculos</h2>
                <h3>Confira alguns de nossos modelos disponíveis</h3>

            </div>
            <div className='filterProdutos'>
                <ul>
                    {list.map((item) => (
                    <PortfolioList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                    ))}
                </ul>
            </div>
           
            <div className="product">

            {produto.slice(0, 8).map(produto=>(

                <div className="box">

                    <div className="imagem">
                            <img src={imagens[Math.floor(Math.random() * imagens.length)]} alt="" />
                    </div>
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
                        <Link to="/produto/{id}">
                            <button>ver detalhes</button>
                        </Link>
                    </div>
                </div>
            ))
            }
              
            </div>
        </div>

    </div>
  )
}
