import React from 'react';
import Carosel from '../Carosel/Carosel'
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';
const Home = () => {
 
    return (
        <div>
            <Carosel></Carosel>
            <Doctors id="doctors"></Doctors>
            <Services id="services"></Services>
        </div>
    );
};

export default Home;