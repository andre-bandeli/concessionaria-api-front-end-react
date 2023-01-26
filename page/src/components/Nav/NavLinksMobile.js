
import user from '../Nav/user.svg'
import { Link } from "react-router-dom";
import {CgClose, CgMenu, CgHome, CgCreditCard, CgPhone, CgShoppingCart, CgHello, CgUserlane} from 'react-icons/cg'

const NavLinksMobile = () => {

    const homeIcon = <CgHello className='Hamburguer'size='50px' color='rgba(167, 162, 162, 0.575)'/>
    const cardIcon = <CgCreditCard className='Hamburguer'size='50px' color='rgba(167, 162, 162, 0.575)'/>
    const phoneIcon = <CgPhone className='Hamburguer'size='50px' color='rgba(167, 162, 162, 0.575)'/>
    const productIcon = <CgShoppingCart className='Hamburguer'size='50px' color='rgba(167, 162, 162, 0.575)'/>
    const userIcon = <CgUserlane className='Hamburguer'size='50px' color='rgba(167, 162, 162, 0.575)'/>



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
                {productIcon}
                </div>
                <Link to="/motocicletas">Motocicletas</Link>
            </li>
            <li>
            <div className='icon'>
                {productIcon}
                </div>
                <a href="/veiculos"> Automoveis</a>
            </li>
            <li>
            <div className='icon'>
                {cardIcon}
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
                <a href="#contato">Contato</a>
            </li>
            
    </ul>
     );
    
}
 
export default NavLinksMobile;