import React, {useState} from 'react';
import {navigationItems } from '../utils/navigationList';
import Logo from '../assets/Logo.svg';
import HamBurger from '../assets/HamBurger.svg';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';
import CloseIcon from '@mui/icons-material/Close';

function Navigation() {

    const [showNavLink, SetshowNavLinks] = useState(false);
    return (
        <div className="navigation">
            <Link to="/"><img src={Logo} className="navigation__logo" alt="tumi-logo" /></Link>
            <nav className="navigation__section">    
                <ul className="navigation__list" id={showNavLink ? "hidden" : ""} >
                    {navigationItems.map((item) => {
                        return <Link className="navigation__section-links" to={item.url}><li className="navigation__section-items">{item.title}</li></Link>        
                    })}
                </ul>
                <Link to="/" onClick={() => SetshowNavLinks(!showNavLink)}>
                    {showNavLink ? <CloseIcon className="close-menu"/> :
                    <img src={HamBurger} alt="navBar-menu" className="navigation__section-hamBar" />
                    }
                </Link>
            </nav>
        </div>
    )
}
export default Navigation
