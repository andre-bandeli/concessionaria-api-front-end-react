
import React, { useEffect, useState } from 'react';
import {useLocation } from "react-router-dom"
import './pageTitle.css'


export default function PageTitle() {

  const location = useLocation();
  const [title, setTitle] = useState("");

  useEffect(() => {
    switch (location.pathname) {
      case '/motocicletas':
        setTitle('Motocicletas');
        break;
      case '/veiculos':
        setTitle('Veículos');
        break;
      case '/contato':
        setTitle('Nossos Contatos');
        break;
      case '/sobre':
        setTitle('Sobre Nós');
        break;
      default:
        setTitle('WebMotors');
        break;
    }
  }, [location]);

  return (
    <div className='title_financeiro'>
        <h2>{title}</h2>
    </div>
  )
}
