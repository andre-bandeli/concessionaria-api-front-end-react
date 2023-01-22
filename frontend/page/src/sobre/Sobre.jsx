import React from 'react'
import './sobre.scss'
import Navbar from '../components/Nav/Navbar'
import HeaderSobre from './header/HeaderSobre'
import Footer from '../components/footer/Footer'
import Container from './Container'
import Box from './box/Box'
import PageTitle from './PageTitle'

export default function Sobre() {
  return (
    <div className='sobre'>
      <Navbar/>
      <HeaderSobre/>
      <PageTitle/>
      <Box/>
      <Container/>
      <Footer/>
    </div>
  )
}
