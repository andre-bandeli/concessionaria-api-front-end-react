import React from 'react'
import './produtos.scss'
import { useEffect, useState } from 'react';
import moto from './moto.png'
import moto1 from './moto1.jpg'
import moto2 from './moto2.jpg'
import moto3 from './moto3.jpg'
import moto4 from './moto4.webp'
import moto5 from './moto5.jpg'
import { Link } from "react-router-dom";

import PortfolioList from './ProdutosCategoriaList';

export default function Produtos() {

    const[produto,setProduto]=useState([])
    const [selected, setSelected] = useState("motos");

    const imagens = [moto, moto1, moto2, moto3, moto4, moto5];

    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(12);


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
                    .then(response => response.json())
                    .then((result)=>{
          setProduto(result);
        })
                break;
            case "yamaha":
                fetch('https://springboot-api-crud-java-react-production.up.railway.app/api/v1/moto/list/yamaha')
                    .then(response => response.json())
                    .then((result)=>{
          setProduto(result);
        })
                break;
            case "honda":
                fetch('https://springboot-api-crud-java-react-production.up.railway.app/api/v1/moto/list/honda')
                    .then(response => response.json())
                    .then((result)=>{
          setProduto(result);
        })
                break;
            case "bmw":
                fetch('https://springboot-api-crud-java-react-production.up.railway.app/api/v1/moto/list/bmw')
                    .then(response => response.json())
                    .then((result)=>{
          setProduto(result);
        })
                break;
            default:
                fetch('https://springboot-api-crud-java-react-production.up.railway.app/api/v1/moto/list')
                    .then(response => response.json())
                    .then((result)=>{
          setProduto(result);
        })
        }
    }, [selected]);

    const indexOfLast = currentPage * perPage;
    const indexOfFirst = indexOfLast - perPage;
    const currentProdutos = produto.slice(indexOfFirst, indexOfLast);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);




  return (
    <div className="produtos" id='produtos'>

        <div className="containerProdutos">

            <div className="titleProdutos">

                <h2>Motocicletas</h2>
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

                {currentProdutos.map(produto=>(

                    <div className="box">

                        <div className="imagem">
                                <img src={imagens[Math.floor(Math.random() * imagens.length)]}  alt="" />
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
                                <Link to={`/produto/${produto.id}`}>
                                <button>
                                    ver detalhes
                                </button>
                                
                            </Link>
                        </div>
                    </div>
                ))
                }
              
            </div>

            <Pagination
                perPage={perPage}
                totalProdutos={produto.length}
                paginate={paginate}
            />
        </div>

    </div>
  )
}

const Pagination = ({ perPage, totalProdutos, paginate }) => {
    const pageNumbers = [];
    
    for (let i = 1; i <= Math.ceil(totalProdutos / perPage); i++) {
    pageNumbers.push(i);
    }
    
    return (
        <nav className='pagination'>
            <ul>
            {pageNumbers.map(number => (
                <li key={number} className='page-item'>
                    <a onClick={() => paginate(number)} className='page-link'>
                        {number}
                    </a>
                </li>
            ))}
            </ul>
        </nav>
    );
};
    
    
    
    
    
