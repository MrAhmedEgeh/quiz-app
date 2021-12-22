import React, {useRef, useState} from 'react';
import { NavLink, useNavigate, Navigate  } from "react-router-dom";
import { useAuth } from "../context/AuthContext"


const Register = () => {
    // useRefs
    const emailRef = useRef(null);
    const nameRef = useRef(null);
    const passwordRef1 = useRef(null);
    const passwordRef2 = useRef(null);
    const navigate = useNavigate()
    const { signup, updateDisplayName, currentUser } = useAuth()
    // useStates
    const [errorMessage, SetErrorMessage] = useState('');
    // Handlers
    const ValidationHandler = async () =>{
        if(validateEmail(emailRef.current.value) &&
        validateName(nameRef.current.value) &&
        validatePassword(passwordRef1.current.value, passwordRef2.current.value)
         ){
                SetErrorMessage('')
                
                await signup(emailRef.current.value, passwordRef1.current.value)
                .then(async() => {
                    await updateDisplayName(nameRef.current.value)
                    .then(() => {

                        navigate('/dashboard')
                    })
                })
                .catch((error) => {
                    if(error.code === "auth/email-already-in-use") {
                        SetErrorMessage('Email is already used')
                    }else{
                        SetErrorMessage('')

                    }
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

    const validatePassword = (pass1, pass2) => {
        let result = pass1 === pass2;
        if(result){
            return true;
        }else{
            SetErrorMessage('Both password must be equal')
        }
    }
    const validateName = (name) => {
        let result = isNaN(name[0])
        if(result){
            return true;
        }else{
            SetErrorMessage('Name cannot start with a number')
        }
    }
    return ( 
        <div className="login">
            <div className="logincon height55">
                <div className="header">
                <h3>Sign Up</h3>
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
                <div className="username">
                    <input type="text" placeholder="Name" ref={nameRef}/>
                </div>
                <div className="password1">
                    <input type="password" name="password" placeholder="Password" ref={passwordRef1}/>
                </div>
                <div className="password2">
                    <input type="password" name="password" placeholder="Password again" ref={passwordRef2}/>
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


/*
emailRef.current.value !== '' && nameRef.current.value !== ''
            && passwordRef1.current.value === passwordRef2.current.value){
                SetErrorMessage('')
              console.log(nameRef.current.value
                */