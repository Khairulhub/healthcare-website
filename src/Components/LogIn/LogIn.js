import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';

import './LogIn.css'

const LogIn = () => {
    const {signInUsingGoogle} = useAuth();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const auth = getAuth()
    const handleRegistration = e => {
        
        signInWithEmailAndPassword(auth,email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        e.preventDefault();
    }
    const handleEmailChange = e =>{
        setEmail(e.target.value);
    }
    const handlePasswordChange = e =>{
        setPassword(e.target.value);
    }
    return (
        <div className="container">
            <h1 className="text"> LogIn From</h1>
            <div className="text w-25 m-auto">
                <form onSubmit={handleRegistration}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input onBlur={handleEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input onBlur={handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button  type="submit" className="btn btn-primary">Submit</button>
                    <div className="mb-4">
                        <small>
                            <Link onClick={signInUsingGoogle}>
                                SignIn With Google
                            </Link>
                        </small>
                        <small className="m-3">
                            or
                        </small>
                        <small>
                            <Link to="/signup" >
                               SignIn 
                            </Link>
                        </small>
                    </div>
                </form>
            </div>
          
           
        </div>
    );
};

export default LogIn;