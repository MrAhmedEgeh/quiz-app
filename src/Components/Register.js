import React, {useRef} from 'react';
import { NavLink } from "react-router-dom";
const Register = () => {
    // useRefs
    const usernameRef = useRef(null);
    const passwordRef1 = useRef(null);
    const passwordRef2 = useRef(null);
    const errorsRef = useRef(null);
    const checkboxRef = useRef(null);
    // Handlers
    const ValidationHandler = () =>{
        
    }
    return ( 
        <div className="login">
            <div className="logincon height55">
                <div className="header">
                <h3>Sign Up</h3>
                <h5>"Add Your Own Quizzes"</h5>
                </div>
                <div className="errors" ref={errorsRef}></div>
                <div className="email">
                    <input type="email" placeholder="Email" ref={usernameRef}/>
                </div>
                <div className="username">
                    <input type="text" placeholder="username" ref={usernameRef}/>
                </div>
                <div className="password1">
                    <input type="password" name="password" placeholder="passwrod" ref={passwordRef1}/>
                </div>
                <div className="password2">
                    <input type="password" name="password" placeholder="passwrod again" ref={passwordRef2}/>
                </div>
                 <div className="register">
                    <NavLink className="navlink-login" to="/login">I already have an account!</NavLink>
                 </div>
                <div className="submit">
                    <input type="button" value="Submit" onClick={ValidationHandler}/>
                </div>
            </div>
        </div>
     );
}

export default Register;