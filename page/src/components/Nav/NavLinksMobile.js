
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import {CgClose, CgMenu, CgHome, CgCreditCard, CgPhone, CgShoppingCart, CgHello, CgUserlane} from 'react-icons/cg'
import { useLocation } from 'react-router-dom';


import moto from './moto.webp'
import carro from './carros.webp'
import carteira from './carteira.webp'
import phone from './call.webp'
import home from './home.webp'
import info from './info.webp'
import login from './enter.webp'


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