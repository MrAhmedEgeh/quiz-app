import React, {useRef, useState} from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"

const ResetPassword = () => {
    // useRefs
    const emailRef = useRef(null);

    const {resetPassword} = useAuth();
    const navigate = useNavigate()
    // useStates
    const [errorMessage, SetErrorMessage] = useState('');
    // Handlers
    const ValidationHandler = async () =>{
        if(validateEmail(emailRef.current.value)){
            SetErrorMessage('')
            await resetPassword(emailRef.current.value)
            .then(() => {
                navigate('/login')
            })
            .catch((error) => {
                SetErrorMessage(JSON.stringify(error.code))
            })
        }
    }
    const validateEmail = (email) => {
        let result =  String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
        if(result != null){
            return true;
        }else{
            SetErrorMessage('Email is not valid')
        }
      };
    return ( 
        <div className="login">
            <div className="logincon">
                <div className="header">
                <h3>Reset Password</h3>
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
                <div className="username">
                    <input type="email" placeholder="Email" ref={emailRef}/>
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