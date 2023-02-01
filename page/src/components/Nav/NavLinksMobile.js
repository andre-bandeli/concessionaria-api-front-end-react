
import user from '../Nav/user.svg'
import { Link } from "react-router-dom";
import {CgClose, CgMenu, CgHome, CgCreditCard, CgPhone, CgShoppingCart, CgHello, CgUserlane} from 'react-icons/cg'

import moto from '../assets/images/moto.png'
import carro from '../assets/images/carros.png'
import carteira from '../assets/images/carteira.png'


const NavLinksMobile = () => {

    const homeIcon = <CgHello className='Hamburguer'size='50px' color='cecece'/>
    const cardIcon = <CgCreditCard className='Hamburguer'size='50px' color='cecece'/>
    const phoneIcon = <CgPhone className='Hamburguer'size='50px' color='cecece'/>
    const productIcon = <CgShoppingCart className='Hamburguer'size='50px' color='cecece'/>
    const userIcon = <CgUserlane className='Hamburguer'size='50px' color='cecece'/>



    return ( 
        <ul className="mob">
            <li>
                <div className='icon'>
                {homeIcon}
                </div>
                <Link to="/">Home</Link>
            </li>
            <li>
            <div className='icon'>
                <img src={moto}></img>
                </div>
                <Link to="/motocicletas">Motocicletas</Link>
            </li>
            <li>
            <div className='icon'>
                <img src={carro}></img>
                </div>
                <a href="/veiculos"> Automoveis</a>
            </li>
            <li>
            <div className='icon'>
            <img src={carteira}></img>
                </div>
                <a href="/financiamentos"> Financiamentos</a>
            </li>
            <li>
            <div className='icon'>
                {userIcon}
                </div>
                 <Link to="/sobre">Sobre Nós</Link>
            </li>
            <li>
            <div className='icon'>
                {phoneIcon}
                </div>
                <a href="/contato">Contato</a>
            </li>
            
    </ul>
     );
    
}
 
export default NavLinksMobile;