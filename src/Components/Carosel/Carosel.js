import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../images/img-1.jpg'
import img3 from '../../images/img-3.jpg'
import img4 from '../../images/img-4.jpg'

import './Carosel.css'


const Home = () => {
    return (
        
        <Carousel id="home">
            <Carousel.Item>
                <img
                    className="d-block w-100 img"
                    src={img1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img"
                    src={img3}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img"
                    src={img4}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        
    );
};

export default Home;