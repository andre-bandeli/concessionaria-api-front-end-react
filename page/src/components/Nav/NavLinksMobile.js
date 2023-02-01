
import user from '../Nav/user.svg'
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import {CgClose, CgMenu, CgHome, CgCreditCard, CgPhone, CgShoppingCart, CgHello, CgUserlane} from 'react-icons/cg'
import { useLocation } from 'react-router-dom';


import moto from '../assets/images/moto.png'
import carro from '../assets/images/carros.png'
import carteira from '../assets/images/carteira.png'
import phone from './call.png'
import home from './home.png'
import info from './info.png'
import login from './enter.png'


const NavLinksMobile = () => {

    const homeIcon = <CgHello className='icone'size='40px' color='cecece'/>
    const cardIcon = <CgCreditCard className='icone'size='40px' color='cecece'/>
    const phoneIcon = <CgPhone className='icone'size='40px' color='cecece'/>
    const productIcon = <CgShoppingCart className='Hamburguer'size='50px' color='cecece'/>
    const userIcon = <CgUserlane className='icone'size='40px' color='cecece'/>

    const [active, setActive] = useState('');
    const { pathname } = useLocation();
  
    useEffect(() => {
      setActive(pathname);
    }, [pathname]);

    return ( 
        <ul className="mob">
            <li  className={active === '/' ? 'active' : ''}>
                <div className='icon'>
                    <img src={home}></img>
                </div>
                <Link to="/">Home</Link>
            </li>
            <li className={active === '/motocicletas' ? 'active' : ''}>
            <div className='icon'>
                <img src={moto}></img>
                </div>
                <Link to="/motocicletas">Motocicletas</Link>
            </li>
            <li className={active === '/veiculos' ? 'active' : ''}>
            <div className='icon'>
                <img src={carro}></img>
                </div>
                <a href="/veiculos"> Automoveis</a>
            </li>
            <li className={active === '/financiamentos' ? 'active' : ''}>
            <div className='icon'>
            <img src={carteira}></img>
                </div>
                <a href="/financiamentos"> Financiamentos</a>
            </li>
            <li className={active === '/sobre' ? 'active' : ''}>
            <div className='icon'>
                <img src={info}></img>
                </div>
                 <Link to="/sobre">Sobre Nós</Link>
            </li>
            <li className={active === '/contato' ? 'active' : ''}>
            <div className='icon'>
                <img src={phone}></img>
                </div>
                <a href="/contato">Contato</a>
            </li>
            <li className={active === '/login' ? 'active' : ''}>
            <div className='icon'>
                <img src={login}></img>
                </div>
                <a href="/login">Área do Cliente</a>
            </li>
            
    </ul>
     );
    
}
 
export default NavLinksMobile;