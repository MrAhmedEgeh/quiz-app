import React,{useState} from 'react';
import { NavLink } from "react-router-dom";
import Logo from '../Assets/website-logo.png';
import { useAuth } from "../context/AuthContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserCircle, faSignOutAlt, faAddressBook} from '@fortawesome/free-solid-svg-icons';
const Nav = () => {
    const {currentUser, logout} = useAuth()
    const [showMenu, setShowMenu] = useState(false);
    return(
        <div className="nav">
            <div className="content">
            <NavLink to='/' className="NavLinkNav">
            <img src={Logo} alt="Website Logo" />
            </NavLink>
            {
                currentUser === null || currentUser === undefined?
                (
                    <NavLink to="/login">
                    <button>Login | Register</button>
                    </NavLink>
                )
                :
                (
                    <div className="avatar" onClick={() => setShowMenu(!showMenu)}>
                     <FontAwesomeIcon className="skip-back" size="2x" icon={faUserCircle}/>
                     <div className="">
                     {
                         currentUser.displayName !== null ?
                         (
                            "Hi "+currentUser.displayName.split(' ')[0]+'!'
                         )
                         :
                         (
                            "Hi User!"
                         )
                     }
                     </div>
                    </div>
                )
            }

            </div>
            {
                currentUser !== null && showMenu?
                (
                    <div className="list">
                    <NavLink to='/dashboard'>
                    <span className='dashboard'>Dashboard</span>
                    </NavLink>
                    <div className="singout" onClick={() => logout()}>
                    <FontAwesomeIcon size="1x" icon={faSignOutAlt}/>
                    <span>Sign Out</span>
                    </div>
                </div>
                )
                :
                ('')
            }
        </div>
    );
}
export default Nav;


/*
let name = "Ahmed Egeh"

console.log("Hi "+name.split(' ')[0]+'!')
*/