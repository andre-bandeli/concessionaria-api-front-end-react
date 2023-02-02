import React from 'react'
import './produtos.scss'
import { useEffect, useState } from 'react';
import moto from './carro.webp'
import { Link } from "react-router-dom";

import PortfolioList from './ProdutosCategoriaList';

export default function Veiculos() {

    const[produto,setProduto]=useState([])
    const [selected, setSelected] = useState("motos");


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
                            <img src={moto} alt="" />
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
