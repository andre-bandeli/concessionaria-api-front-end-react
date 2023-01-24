import React from 'react'
import Navbar from '../../components/Nav/Navbar'
import './veiculos.scss'
import HeaderMotos from './header/HeaderVeiculos'
import Footer from '../../components/footer/Footer'
import Produtos from './produtos/Produtos'
import PageTitle from './header/PageTitle'

export default function Veiculos() {
  return (
    <div className='veiculos'>
      <Navbar/>
      <HeaderMotos/>
      <PageTitle/>
      <Produtos/>
      <Footer/>
    </div>
  )
}
