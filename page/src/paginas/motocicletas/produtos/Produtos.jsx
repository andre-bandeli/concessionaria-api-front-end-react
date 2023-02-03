import React from 'react'
import '../../../components/produtos/produtos.scss'
import { useEffect, useState } from 'react';
import moto from '../../../components/produtos/assets/moto.webp'
import moto1 from '../../../components/produtos/assets/moto1.webp'
import moto4 from '../../../components/produtos/assets/moto4.webp'
import { Link } from "react-router-dom";

import ProdutoCategoriaList from '../../../components/produtos/ProdutosCategoriaList'


export default function Produtos() {

    const[produto,setProduto]=useState([])
    const [selected, setSelected] = useState("motos");

    const imagens = [moto, moto1, moto4];

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
    <div className="produtosIndex" id='produtos'>

        <div className="containerProdutosIndex">

            <div className="titleProdutosIndex">

                <h2>Motocicletas</h2>
                <h3>Confira alguns de nossos modelos disponíveis</h3>

            </div>
            <div className='filterProdutos'>
                <ul>
                    {list.map((item) => (
                    <ProdutoCategoriaList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                    ))}
                </ul>
            </div>
           
            <div className="productIndex">

                {currentProdutos.map(produto=>(

                    <div className="boxIndex">

                        <div className="imagem">
                                <img src={imagens[Math.floor(Math.random() * imagens.length)]}  alt="" />
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
    
    
    
    
    
