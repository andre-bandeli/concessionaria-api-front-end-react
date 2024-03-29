import React from 'react'
import './folder.scss'
import { Link } from "react-router-dom";


export default function Folder() {
  return (
    <div className='folder'>

        <div className="container-folder">
          <h1>Novo HR-V</h1>
              <h2>Aproveite nossas condições especiais de financiamento.</h2>
              <h3>Experimente o novo HR-V e desfrute de uma jornada confortável e segura. 
                Aproveite nossas condições especiais de financiamento e 
                tornar este carro incrível seu agora mesmo</h3>
                <Link to="/financiamentos">
                <button> Consultar financiamento</button></Link>
        </div>

    </div>
  )
}
