import React from 'react'
import '../../../components/produtos/produtos.scss'
import { useEffect, useState } from 'react';
import carro from '../../../components/produtos/assets/carro.webp'
import carro3 from '../../../components/produtos/assets/carro3.webp'
import carro4 from '../../../components/produtos/assets/carro4.webp'
import carro5 from '../../../components/produtos/assets/carro5.webp'
import carro6 from '../../../components/produtos/assets/carro6.webp'
import carro7 from '../../../components/produtos/assets/carro7.webp'
import { Link } from "react-router-dom";
import ProdutoCategoriaList from '../../../components/produtos/ProdutosCategoriaList'

export default function Produtos() {


    const imagens = [carro, carro3, carro4, carro5, carro6, carro7];

    const[produto,setProduto]=useState([])
    const [selected, setSelected] = useState("carros");

    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(12);


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
        id: "bmw",
        title: "BMW",
        },
        {
        id: "audi",
        title: "Audi",
        },
    ];

    useEffect(() => {
        switch (selected) {
            case "carros":
                fetch('https://springboot-api-crud-java-react-production.up.railway.app/api/v1/veiculo/list')
                    .then(response => response.json())
                    .then((result)=>{
          setProduto(result);
        })
                break;
            case "honda":
                fetch('https://springboot-api-crud-java-react-production.up.railway.app/api/v1/veiculo/list')
                    .then(response => response.json())
                    .then((result)=>{
          setProduto(result);
        })
                break;
            case "audi":
                fetch('https://springboot-api-crud-java-react-production.up.railway.app/api/v1/veiculo/list')
                    .then(response => response.json())
                    .then((result)=>{
          setProduto(result);
        })
                break;
            case "bmw":
                fetch('https://springboot-api-crud-java-react-production.up.railway.app/api/v1/veiculo/list')
                    .then(response => response.json())
                    .then((result)=>{
          setProduto(result);
        })
                break;
            default:
                fetch('https://springboot-api-crud-java-react-production.up.railway.app/api/v1/veiculo/list')
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
    
                    <h2>Veículos</h2>
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
    
    
    
    
    
