
import './App.css';
import { Route, Routes } from "react-router-dom"

import Index from './paginas/index/Index';
import Sobre from './paginas/sobre/Sobre';
import Login from './paginas/login/Login';
import ProdutoSingle from './produto_single/ProdutoSingle';
import Motocicletas from './paginas/motocicletas/Motocicletas';
import Veiculos from './components/produtos/Veiculos';
import Financiamentos from './paginas/financeiro/Financiamentos';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/financiamentos" element={<Financiamentos />} />
      <Route path="/login" element={<Login />} />
      <Route path="/motocicletas" element={<Motocicletas />} />
      <Route path="/veiculos" element={<Veiculos />} />
      <Route path="/produto/list" element={<ProdutoSingle />} />
    </Routes>
  );
}

export default App;
