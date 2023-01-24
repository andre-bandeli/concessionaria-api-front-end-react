import React from 'react'
import Navbar from '../components/Nav/Navbar'
import Filter from './produtos/Filter.jsx'
import './financiamentos.scss'
import ProdutosCategoriaList from './produtos/FilterList'
import Footer from '../components/footer/Footer'

export default function Financiamentos() {
  return (
    <div className='financeiro'>
        <Navbar/>
        <Filter/>
        <Footer/>
    </div>
  )
}
