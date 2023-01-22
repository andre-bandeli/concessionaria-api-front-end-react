import MobileNavgation from './MobileNavigation'
import { Link } from "react-router-dom";
import usuario from './user.svg'


const Navbar = () => {
    return (
        <div className="Navbar">
            <ul>
                <li className='menu'>
                    <h3>Menu</h3>
                    <MobileNavgation/>
                </li>
                <li>
                <Link to="/">
                    <h2 className='logo'>Web Motors</h2>
                </Link>
                </li>
                <li>
                    <img src={usuario}></img>
                    <Link to="/login">
                        <h3>Área do cliente</h3>
                    </Link>
                </li>
            </ul>
            
        </div>
    );
}
 
export default Navbar;