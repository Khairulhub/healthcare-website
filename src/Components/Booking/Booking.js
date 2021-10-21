import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const {doctorId} = useParams()
    return (
        <div>
            <h2>this is booking {doctorId}</h2>
        </div>
    );
};

export default Booking;