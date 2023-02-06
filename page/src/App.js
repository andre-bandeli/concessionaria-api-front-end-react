
import './App.css';
import { Route, Routes, useLocation } from "react-router-dom"
import React, { useEffect } from 'react';

import Index from './paginas/index/Index';
import Sobre from './paginas/sobre/Sobre';
import Login from './paginas/login/Login';
import ProdutoSingle from './paginas/produto_single/ProdutoSingle';
import Motocicletas from './paginas/motocicletas/Motocicletas';
import Veiculos from './paginas/veiculos/Veiculos';
import Financiamentos from './paginas/financeiro/Financiamentos';
import Contato from './paginas/contato/Contato';


function App() {

  const location = useLocation();

  useEffect(() => {
    let title = '';
    switch (location.pathname) {
      case '/sobre':
        title = 'WS Sobre Nós';
        break;
      case '/financiamentos':
        title = 'WS Financiamentos';
        break;
      case '/motocicletas':
        title = 'WS Motocicletas';
        break;
      case '/veiculos':
        title = 'WS Veículos';
        break;
      case '/login':
        title = 'WS Login';
        break;
      case '/contato':
        title = 'WS Contato';
        break;
      default:
        title = 'WebStore';
        break;
    }
    document.title = title;
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/financiamentos" element={<Financiamentos />} />
      <Route path="/login" element={<Login />} />
      <Route path="/motocicletas" element={<Motocicletas />} />
      <Route path="/veiculos" element={<Veiculos />} />
      <Route path="/produto/:id" element={<ProdutoSingle />} />
      <Route path="/contato" element={<Contato />} />
    </Routes>
  );
}

export default App;
