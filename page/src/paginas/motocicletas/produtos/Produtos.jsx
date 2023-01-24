import React from 'react'
import '../../../components/produtos/produtos.scss'
import { useEffect, useState } from 'react';
import moto from './moto.png'
import { Link } from "react-router-dom";
import iconarrow from '../../veiculos/produtos/arrow.png'

import PortfolioList from './ProdutosCategoriaList';

export default function Produtos() {

    const[nome_modelo,setNome_modelo]=useState('')
    const[preco,setPreco]=useState('')
    const[marca,setMarca]=useState('')
    const[descricao,setDescricao]=useState('')
    const [data, setData] = useState([]);
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


    const handleClick=(e)=>{
        e.preventDefault()
        const produto={nome_modelo,marca, preco, descricao}
        console.log(produto)
        fetch("http://localhost:8080/api/produto/add",{
          method:"POST",
          mode: 'no-cors',
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(produto)
    
      }).then(()=>{
        console.log("Novo produto adicionado.")
      })
    }

    useEffect(() => {
        switch (selected) {
            case "motos":
                fetch('http://127.0.0.1:8085/api/v1/moto/list')
                    .then(response => response.json())
                    .then((result)=>{
          setProduto(result);
        })
                break;
            case "yamaha":
                fetch('http://127.0.0.1:8085/api/v1/moto/list/yamaha')
                    .then(response => response.json())
                    .then((result)=>{
          setProduto(result);
        })
                break;
            case "honda":
                fetch('http://127.0.0.1:8085/api/v1/moto/list/honda')
                    .then(response => response.json())
                    .then((result)=>{
          setProduto(result);
        })
                break;
            case "bmw":
                fetch('http://127.0.0.1:8085/api/v1/moto/list/bmw')
                    .then(response => response.json())
                    .then((result)=>{
          setProduto(result);
        })
                break;
            default:
                fetch('http://127.0.0.1:8085/api/v1/moto/list')
                    .then(response => response.json())
                    .then((result)=>{
          setProduto(result);
        })
        }
    }, [selected]);


  return (
    <div className='produtos'>

        <div className="container-produtos">

            <div className='filter'>
                <div className="menu">
                        <Link to="/">
                            <h2>Home<span className='spn'> 
                            
                                <img src={iconarrow} alt="" />

                            </span></h2>
                        </Link>
                        <h2>Motocicletas</h2>
                </div>
                <h2>Motos</h2>
                <ul>
                    <h4>Filtrar por marca:</h4>
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

            {produto.map(produto=>(

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
                            ver detalhes
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
