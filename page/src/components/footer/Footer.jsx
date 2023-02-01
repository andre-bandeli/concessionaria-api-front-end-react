import React from 'react'
import './footer.scss'
import instagran from './insta.webp'
import linkedin from './in.webp'
import twitter from './twitter.webp'

export default function Footer() {
  return (
    <div className='footer'>
        <div className="social-box">
                
        </div>
        <div className="containerFooter">

           <div className="boxFooter">
            <h2>Instituccional</h2>
            <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        Login
                    </li>
                    <li>
                        Motocicletas
                    </li>
                    <li>
                        Automoveis
                    </li>
                    <li>
                        Licenciamento
                    </li>
                    <li>
                        Sobre
                    </li>
                    <li>
                        Contato
                    </li>
            </ul>

           </div>
           <div className="boxFooter">
            <h2>Produtos</h2>
           <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        Login
                    </li>
                    <li>
                        Motocicletas
                    </li>
                    <li>
                        Automoveis
                    </li>
                    <li>
                        Licenciamento
                    </li>
                    <li>
                        Sobre
                    </li>
                    <li>
                        Contato
                    </li>
            </ul>

            
            </div>
            <div className="boxFooter">
            <h2>Contato</h2>
            <ul>
                    <li>
                        Francisco Matarazzo Avenue, 45112, Jd. Retirantes. 
                    </li>
                    <li>
                       São Paulo, Brasil.
                    </li>
                    <li>
                        (11) 2664-4588 | (11) 2256-4785
                    </li>
                    <li>
                        Atendimento: seg à sex: 08h00 às 19h00
                    </li>
                    <li className='redes'>
                        <img src={twitter} alt="" />
                        <img src={instagran} alt="" />
                        <img src={linkedin} alt="" />
                    </li>
                   
            </ul>

            </div>
            <div className="boxFooter">
            <h2>Carreiras</h2>
            <ul>
                    <li>
                        Trabalhe Conosco
                    </li>
                    <li>
                       Nosso Time
                    </li>
                    <li>
                        Programa de aceleramento
                    </li>
                    <li>
                        Politíca de contratação
                    </li>
                   
            </ul>
            </div>

        </div>

        
    </div>
  )
}
