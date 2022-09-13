import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { auth } from './firebase';
import './Login.css'
import {  useHistory } from "react-router-dom";

function Login() {
    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email,password)
            .then(auth => {
                history.push('/') 
            })
            .catch(error => alert(error.message))

    }

    const register = e => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth) => {
                // console.log(auth);
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className='login_logo'
                    src='https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/012015/amazon-logo-rgb.png?itok=FZJ5-sKg' />
            </Link>

            <div className='login_container'>
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}></input>
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}></input>
                    <button type='submit' onClick={signIn} className='login_signInButton'>Sign In</button>
                </form>
                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button onClick={register} className='login_registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login