import React from 'react'
import Navbar from '../components/Nav/Navbar'
import './financiamentos.scss'
import HeaderFinanceiro from './HeaderFinanceiro'
import PageTitle from './PageTitle'

export default function Financiamentos() {
  return (
    <div className='financeiro'>
        <Navbar/>
        <HeaderFinanceiro/>
        <PageTitle/>
    </div>
  )
}
