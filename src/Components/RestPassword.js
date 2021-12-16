import React, {useRef, useState} from 'react';
import { NavLink } from "react-router-dom";


const ResetPassword = () => {
    // useRefs
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const errorsRef = useRef(null);
    const checkboxRef = useRef(null);

    // useStates
    const [errorMessage, SetErrorMessage] = useState('');
    // Handlers
    const ValidationHandler = () =>{
        
    }
    return ( 
        <div className="login">
            <div className="logincon">
                <div className="header">
                <h3>Reset Password</h3>
                </div>
                <div className="errors" ref={errorsRef}>
                    <div>{errorMessage}</div>
                </div>
                <div className="username">
                    <input type="email" placeholder="username" ref={usernameRef}/>
                </div>
                <div className="submit marginTop20">
                    <input type="button" value="Submit" onClick={ValidationHandler}/>
                </div>
                <div className="register marginTop20">
                    <NavLink className="navlink-login" to="/login">Sign In</NavLink>
                 </div>
            </div>
        </div>
     );
}

export default ResetPassword;