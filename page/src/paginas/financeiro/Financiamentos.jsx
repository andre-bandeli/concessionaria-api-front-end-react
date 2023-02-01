import React from 'react'
import Navbar from '../../components/Nav/Navbar'
import Filter from './financeiroFilter/Filter'
import './financiamentos.scss'
import Footer from '../../components/footer/Footer.jsx'
import Duvidas from './duvidas/Duvidas'

export default function Financiamentos() {
  return (
    <div className='financeiro'>
        <Navbar/>
        <Filter/>
        <Duvidas/>
        {/* <Footer/> */}
    </div>
  )
}
