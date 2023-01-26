import MobileNavgation from './MobileNavigation'
import { Link } from "react-router-dom";
import usuario from './user.svg'
import {CgLogIn, CgSearch} from 'react-icons/cg'

const Navbar = () => {

    const logIn = <CgLogIn className='Hamburguer'size='30px' color='rgb(51, 49, 49)'/>
    const serchIcon = <CgSearch className='Hamburguer'size='30px' color='rgba(39, 36, 36, 0.699)'/>


    return (
        <div className="Navbar">
            <ul>
                <li className='menu'>

                    <MobileNavgation/>
                </li>
                <li>
                <Link to="/">
                    <h2 className='logo'>Web Motors</h2>
                </Link>
                </li>
                <li>
                    <div className='navsearchContainer'>
                    
                        <div className='pesquisa'>
                            <div className='icon_'>
                                {serchIcon}
                                <h4>Procurar</h4>
                            </div>
                        </div>
                        <div className='icon_'>
                            {logIn}
                        </div>
                        <Link to="/login">
                            <h3>LogIn</h3>
                        </Link>
                    </div>
                    
                </li>
            </ul>
            
        </div>
    );
}
 
export default Navbar;