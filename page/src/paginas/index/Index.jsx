import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/Nav/Navbar'
import Card from './card/Card'
import Contato from './contato/Contato'
import Financiamentos from './financiamentos/Financiamentos'
import Header from './header/Header'
import Produtos from '../../components/produtos/Produtos'
import Marca from './marcas/Marca'
import Veiculos from '../../components/produtos/Veiculos'
import PageTitle from './PageTitle'
import Folder from './folder/Folder'


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <PageTitle/>
      <Card/>
      <Folder/>
      <Produtos/>
      <Veiculos/>
      <Marca/>
      <Financiamentos/>
      <Contato/>
      <Footer/>
    </div>
  )
}
