import React from 'react';
import { NavLink } from "react-router-dom";
import Logo from '../Assets/website-logo.png';
const Nav = () => {
    return(
        <div className="nav">
            <div className="content">
            <NavLink to='/' className="NavLinkNav">
            <img src={Logo} alt="Website Logo" />
            </NavLink>
            <button>Login | Register</button>
            </div>
        </div>
    );
}

export default Nav;