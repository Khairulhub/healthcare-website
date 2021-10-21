import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container fluid className="bg-dark text-light">
            <Container>
            <Row className="py-5 ">
                <Col sm>
                    <h1>Hospital</h1>
                    <br />
                    <article>My kinda people, my kinda place. There's something special about this place.

                    </article>
                    <br /><br />
                    <h4>Hospital</h4>
                    <div className="d-flex justify-content-between">
                        <h6>33 Farlane Street</h6>
                        <h6>+123 655 655</h6>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h6>Keilor East</h6>
                        <h6>Keilor East</h6>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h6>VIC 3033, Australia</h6>
                        <h6>medico@mail.com</h6>
                    </div>

                </Col>
                <Col sm>
                    <h3>LATEST POSTS</h3>
                    <br />
                    <div className="d-flex">
                        <h6>*</h6>
                        <h6 className="ms-3">Together we can do so much
                            April 8, 2016</h6>
                    </div>
                    <br />
                    <div className="d-flex">
                        <h6>*</h6>
                        <h6 className="ms-3">The Three Musketeers Surgical Team
                            April 8, 2016</h6>
                    </div>
                    <br />
                    <div className="d-flex">
                        <h6>*</h6>
                        <h6 className="ms-3">Accredited surgical facility
                            April 8, 2016</h6>
                    </div>
                    <br />
                    <div className="d-flex">
                        <h6>*</h6>
                        <h6 className="ms-3">Health checks for babies
                            April 8, 2016</h6>
                    </div>

                </Col>
                <Col sm>
                    <h4>SUBSCRIBE NEWSLETTER</h4>
                    <br />
                    <br />
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Your Name" />
                            
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" />
                            
                        </Form.Group>
                        
                        <Button variant="primary" type="submit">
                            Subscribe
                        </Button>
                    </Form>
                </Col>
            </Row>
            <div>
                <p className="m-auto py-3">@Copy Khairul Islam  2021</p>
            </div>
            </Container>
        </Container>
    );
};

export default Footer;