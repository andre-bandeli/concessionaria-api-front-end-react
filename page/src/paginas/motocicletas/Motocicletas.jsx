import React from 'react'
import Navbar from '../../components/Nav/Navbar'
import './motocicletas.css'
import Footer from '../../components/footer/Footer'
import Produtos from './produtos/Produtos'
import HeaderMotos from './header/HeaderMotos'
import PageTitle from '../../components/pagetitles/PageTitle'

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
