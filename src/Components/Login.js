import React, {useRef, useState} from 'react';
import { NavLink, useNavigate, Navigate  } from "react-router-dom";
import { useAuth } from "../context/AuthContext"

const Login = () => {
    // useRefs
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const checkboxRef = useRef(null);
    const navigate = useNavigate()
    const { login, currentUser } = useAuth()

    // useStates
    const [errorMessage, SetErrorMessage] = useState('');
    // Handlers
    const ValidationHandler = async () => {
        if(emailRef.current.value === ''){
            SetErrorMessage("Username is required");
        }else if(passwordRef.current.value === ''){
            SetErrorMessage("Password is required");
        }
        if(emailRef.current.value !== '' && passwordRef.current.value !== ''){

            try{
                SetErrorMessage("");
                await login(emailRef.current.value, passwordRef.current.value)
                navigate('/dashboard')
            }catch{
                SetErrorMessage("Failed to log in");
            }
        }
    }
    if(currentUser !== null){
        return <Navigate from="/login" to="/" />
     }
    return ( 
        <div className="login">
            <div className="logincon height50">
                <div className="header">
                <h3>Sign In</h3>
                <h5>"Add Your Own Quizzes"</h5>
                </div>
                <div className="errors">
                    {
                        errorMessage !== '' ?
                        (
                            <div>{errorMessage}</div>
                        ): 
                        ('')
                    }
                </div>
                <div className="email">
                    <input type="email" placeholder="Email" ref={emailRef}/>
                </div>
                <div className="password">
                    <input type="password" name="password" placeholder="passwrod" ref={passwordRef}/>
                </div>
                 <div className="register">
                    <NavLink className="navlink-login" to="/register">I don't have an account!</NavLink>
                 </div>
                 <div className="register">
                    <NavLink className="navlink-login" to="/ResetPassword">Forget Password</NavLink>
                 </div>
                <div className="submit">
                    <input type="button" value="Submit" onClick={ValidationHandler}/>
                </div>
            </div>
        </div>
     );
}

export default Login;