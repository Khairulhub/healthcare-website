import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div className="text w-25 m-auto ">
            <h1 className="text-decoration-underline fw-bold mb-5">SignIn From</h1>
             <form className="row g-3 ">
                <div className="col-12">
                    <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                </div>
                <div className="col-12">
                    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"/>
                </div>
                <div className="col-12">
                   
                    <input type="email" className="form-control" placeholder="E-mail" id="inputEmail4" />
                </div>
                <div className="col-12">
                    
                    <input type="password" className="form-control" placeholder="Password" id="inputPassword4" />
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" for="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary m-3">Sign in</button>
                    <Link to="/home"><button type="submit" className="btn btn-primary">Back</button></Link>
                </div>
            </form>
        </div>
    );
};

export default SignIn;