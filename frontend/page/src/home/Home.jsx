import React from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/Nav/Navbar'
import Card from './card/Card'
import Contato from './contato/Contato'
import Financiamentos from './financiamentos/Financiamentos'
import Header from './header/Header'
import Produtos from './produtos/Produtos'
import Marca from './marcas/Marca'
import Veiculos from './produtos/Veiculos'


export default function Home() {
  return (
    <div>
      <Navbar/>,
      <Header/>
      <Card/>
      <Produtos/>
      <Veiculos/>
      <Marca/>
      <Financiamentos/>
      <Contato/>
      <Footer/>

    </div>
  )
}
