import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
  console.log(props.services);
    const {name, picture,ditails , phone } = props.services;
    return (
        <div className="col-md-4 my-3"id="doctors">
        {
          <Card>
          <Card.Img variant="top" src={picture} />
          <Card.Body>
            <Card.Title>Name : {name}</Card.Title>
            <Card.Text>Ditails : {ditails}</Card.Text>
            <Card.Text>Phone : {phone}</Card.Text>
            
          </Card.Body>
          <Link to="/home"> <Button>contact</Button></Link>
         
        </Card>
        }
      </div>
    )}

export default Service;