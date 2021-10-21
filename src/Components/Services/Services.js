import React from 'react';
import  { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('services.json')
            .then(res => res.json())
            .then(data=>setServices(data));
        
    }, []);
    return (
        <div className="row container mx-auto my-5" id="services" >
            <h3  className="text-decoration-underline text-primary fw-bold py-3">services</h3>
            {
                services.map(service =><Service 
                key={service._id}
                services={service}
                ></Service>)
            }
            
        </div>
    );
};

export default Services;