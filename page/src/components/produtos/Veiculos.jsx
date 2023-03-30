import React, { useEffect, useState } from 'react';
import './produtos.css'
import './responsive.css'
import carro from './assets/carro.webp';
import carro3 from './assets/carro3.webp';
import carro4 from './assets/carro4.webp';
import carro5 from './assets/carro5.webp';
import carro6 from './assets/carro6.webp';
import carro7 from './assets/carro7.webp';
import { Link } from 'react-router-dom';
import PortfolioList from './ProdutosCategoriaList';

export default function Veiculos() {

    const[produto,setProduto]=useState([])
    const [selected, setSelected] = useState("carros");

    const imagens = [carro, carro3, carro4, carro5, carro6, carro7];


    const list = [
        {
        id: "carros",
        title: "Todos os veículos",
        },
        {
        id: "honda",
        title: "Honda",
        },
        {
        id: "audi",
        title: "Audi",
        },
        {
        id: "bmw",
        title: "BMW",
        },
    ];


    useEffect(() => {
        switch (selected) {
            case "carros":
                fetch('https://concessionaria-spring-boot-production.up.railway.app/api/v1/veiculo/list')
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
                fetch('https://concessionaria-spring-boot-production.up.railway.app/api/v1/veiculo/marca/honda')
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
            case "audi":
                fetch('https://concessionaria-spring-boot-production.up.railway.app/api/v1/veiculo/marca/audi')
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
                fetch('https://concessionaria-spring-boot-production.up.railway.app/api/v1/veiculo/marca/bmw')
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
                fetch('https://concessionaria-spring-boot-production.up.railway.app/api/v1/veiculo/list')
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
    <div className='produtosIndex'>

        <div className="containerProdutosIndex">

            <div className="titleProdutosIndex">

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
