import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';


const Doctors = () => {
    const [doctors,setDoctors]=useState([]);
    useEffect(()=>{
        fetch('doctors.json')
            .then(res => res.json())
            .then(data=>setDoctors(data));
        
    }, []);
   
    return (
        <div className="row container mx-auto my-5" id="doctors" >
            <h3  className="text-decoration-underline text-primary fw-bold py-3">Doctors</h3>
            {
                doctors.map(doctor =><Doctor 
                key={doctor._id}
                doctor={doctor}
                ></Doctor>)
            }
            
        </div>
    );
};

export default Doctors;