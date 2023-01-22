import React from 'react'
import Navbar from '../components/Nav/Navbar'
import './motocicletas.scss'
import HeaderMotos from './header/HeaderMotos'
import Footer from '../components/footer/Footer'
import Produtos from './produtos/Produtos'

export default function Motocicletas() {
  return (
    <div className='motocicletas'>
      <Navbar/>
      <HeaderMotos/>
      <Produtos/>
      <Footer/>
    </div>
  )
}
