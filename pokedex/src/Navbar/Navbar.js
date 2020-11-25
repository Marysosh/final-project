import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav-wrapper blue darken-4">
            <div className="container">   
                <ul className="right">
                    <li className="hide-on-small-only"><Link to="/#">Home</Link></li>
                    <li><NavLink to="/caught">Caught</NavLink></li> 
                </ul>
                <div className="brand-logo left-align"><Link to="/">Pokedex</Link></div>  
            </div>
        </nav>
    )
}

export default Navbar;