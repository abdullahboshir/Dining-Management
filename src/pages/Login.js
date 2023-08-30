import React, { useState } from 'react';
import DineRegisterInput from '../components/dineActivities/DineRegisterInput';
import  '../assets/styles/login.css';
import { AiFillGooglePlusCircle } from 'react-icons/ai';
import auth from '../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Login = () => {
    const [emailOrPhoneNumber, setEmailOrPhoneNumber] = useState();
    const [loginPassword, setLoginPassword] = useState();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const handleLoginBlur = async (event) => {
        event.preventDefault();
        console.log(emailOrPhoneNumber)
        console.log(loginPassword)
        const loginInfo = {
            emailOrPhoneNumber,
            loginPassword
        };
    }


    return (
       <form  onSubmit={handleLoginBlur}>
         <div className='login-container'>
             <div className='login'>
            <h2>Login</h2>
             <DineRegisterInput states={{setEmailOrPhoneNumber, emailOrPhoneNumber, setLoginPassword, loginPassword}}/>

             <AiFillGooglePlusCircle onClick={() => signInWithGoogle()} style={{fontSize: "30px", marginBottom: '10px'}}/>

             <button>Login</button>
             </div>
        </div>
       </form>
    );
};

export default Login;