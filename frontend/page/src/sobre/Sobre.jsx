import React from 'react'
import './sobre.scss'
import Navbar from '../components/Nav/Navbar'
import Header from '../home/header/Header'
import Footer from '../components/footer/Footer'

export default function Sobre() {
  return (
    <div className='sobre'>
      <Navbar/>
      <Header/>
      <div className="container">
        <h1>Sobre Nós</h1>
        <h2>Lorem Ipsum is simply dummy text of the printing and 
          typesetting industry. Lorem Ipsum has been the industry's standard dummy 
          text ever since the 1500s, when an unknown printer took a galley of type and 
          scrambled it to make a type specimen book. It has survived not only five centuries, 
          but also the leap into electronic typesetting, remaining essentially unchanged. 
          It was popularised in the 1960s with the release of Letraset sheets containing
           Lorem Ipsum passages, and more recently with desktop publishing 
           software like Aldus PageMaker including versions of Lorem Ipsum.</h2>
           <h2>Lorem Ipsum is simply dummy text of the printing and 
          typesetting industry. Lorem Ipsum has been the industry's standard dummy 
          text ever since the 1500s, when an unknown printer took a galley of type and 
          scrambled it to make a type specimen book. It has survived not only five centuries, 
          but also the leap into electronic typesetting, remaining essentially unchanged. 
          It was popularised in the 1960s with the release of Letraset sheets containing
           Lorem Ipsum passages, and more recently with desktop publishing 
           software like Aldus PageMaker including versions of Lorem Ipsum.</h2>
      </div>
      <Footer/>
    </div>
  )
}
