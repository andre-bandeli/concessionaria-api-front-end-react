import MobileNavgation from './MobileNavigation'
import { Link } from "react-router-dom";
import {CgLogIn, CgSearch} from 'react-icons/cg'
import './navbar.css'
import './responsive.css'
import login from '../assets/icones/enter.webp'

const Navbar = () => {

    const serchIcon = <CgSearch className='icone'size='23px'  color='rgba(255, 255, 255, 0.89)'/>


    return (
        <div className="Navbar">

            <ul>
                <li className='menu'>
                    <MobileNavgation/>
                </li>
                <li>
                    <Link to="/">WebStore</Link>
                    
                </li>
                <li className='pesquisa'>
                    <input placeholder='pesquisar no site'>
                            
                    </input>
                    <div className='search'>
                        {serchIcon}   
                    </div>
                    
                </li>
                <li className='login'>
                <Link to="/login">
                    <img src={login} alt="botão para acesso da tela de login"></img></Link>
                </li>
            </ul>

        </div>
    );
}
 
export default Navbar;