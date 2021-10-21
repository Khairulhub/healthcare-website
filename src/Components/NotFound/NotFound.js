import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/not1.jfif'

const NotFound = () => {
    return (
        <div>
            <img className="img" src={img} alt="" />
            <Link to="/home"  >
                <button type="button" className="btn btn-warning ">Back</button>
            </Link>
        </div>
    );
};

export default NotFound;