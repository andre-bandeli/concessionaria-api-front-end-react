import React from 'react'
import Navbar from '../../components/Nav/Navbar'
import './motocicletas.scss'
import HeaderMotos from './header/HeaderMotos'
import Footer from '../../components/footer/Footer'
import Produtos from '../../components/produtos/Produtos'
import PageTitle from './header/PageTitle'

export default function Motocicletas() {
  return (
    <div className='motocicletas'>
      <Navbar/>
      <HeaderMotos/>
      <PageTitle/>
      <Produtos/>
      <Footer/>
    </div>
  )
}
