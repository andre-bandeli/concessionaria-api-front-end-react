import MobileNavgation from './MobileNavigation'
import { Link } from "react-router-dom";
import usuario from './user.svg'
import {CgLogIn, CgSearch} from 'react-icons/cg'

const Navbar = () => {

    const logIn = <CgLogIn className='icon'size='40px' color='black'/>
    const serchIcon = <CgSearch className='icone'size='30px'  color='whitesmoke'/>


    return (
        <div className="Navbar">

            <ul>
                <li className='menu'>
                    <MobileNavgation/>
                </li>
                <li>
                    <h1>
                        WebMotors
                    </h1>
                    
                </li>
                <li className='pesquisa'>
                    <input placeholder='pesquisar no site'>
                            
                    </input>
                    <div className='search'>
                        {serchIcon}   
                    </div>
                    
                </li>
                <li className='login'>
                    {logIn}
                    
                </li>
            </ul>

        </div>
    );
}
 
export default Navbar;