import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/Nav/Navbar'
import './style.css'
import Header from './header/HeaderContato'
import PageTitle from '../../components/pagetitles/PageTitle'
import insta from '../../components/assets/icones/insta.webp'
import linkedin from '../../components/assets/icones/in.webp'
import twitter from '../../components/assets/icones/twitter.webp'

export default function Contato() {
  return (
    <div className='contato-single'>
        <Navbar/>
        <Header/>
        <PageTitle/>
     
        <div className="container-contato">
           <div className="box">
                  <img src={insta} alt="" />
                  <h2>Instagram</h2>
                  <h3>Siga-nos no Instagram para ficar por dentro de tudo o que acontece na 
                    concessionária. Novidades, atualizações e muito mais. Clique abaixo e nos acompanhe agora</h3>
                    <button className='btn-contato'>
                      acessar
                    </button>
           </div>
           <div className="box">
           <img src={linkedin} alt="" />
                  <h2>Linkedin</h2>
                  <h3>Conecte-se conosco no LinkedIn e fique por dentro de nossas novidades e soluções para seu veículo. Seja bem-vindo à concessionária.</h3>
                    <button className='btn-contato'>
                      acessar
                    </button>
           </div>
           <div className="box">
                  <img src={twitter} alt="" />
                  <h2>Twitter</h2>
                  <h3>Siga-nos no Twitter para ficar por dentro das novidades da concessionária. Venha conhecer nossos produtos e serviços.</h3>
                    <button className='btn-contato'>
                      acessar
                    </button>
           </div>
        </div>
        <h3>
            Francisco Matarazzo Avenue, 45112, Jd. Retirantes. São Paulo, Brasil.
        </h3>
        <h4>(11) 2664-4588 | (11) 2256-4785</h4>
        <Footer/>
    </div>
  )
}
