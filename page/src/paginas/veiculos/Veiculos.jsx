import React from 'react'
import Navbar from '../../components/Nav/Navbar'
import './veiculos.css'
import Footer from '../../components/footer/Footer'
import Produtos from './produtos/Produtos'
import HeaderVeiculos from './header/HeaderVeiculos'
import PageTitle from '../../components/pagetitles/PageTitle'

export default function Veiculos() {
  return (
    <div className='veiculos'>
      <Navbar/>
      <HeaderVeiculos/>
      <PageTitle/>
      <Produtos/>
      <Footer/>
    </div>
  )
}
