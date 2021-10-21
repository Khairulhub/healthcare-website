import React from 'react';
import { Button, Card,  } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Doctor = (props) => {
  
  const {_id, name, picture, balance, email, phone } = props.doctor
  return (
    
      <div className="col-md-4 my-3"id="doctors">
        {
          <Card>
          <Card.Img variant="top" src={picture} />
          <Card.Body>
            <Card.Title>Name : {name}</Card.Title>
            <Card.Text>Email : {email}</Card.Text>
            <Card.Text>Phone : {phone}</Card.Text>
            <Card.Text>Hire : {balance}</Card.Text>
          </Card.Body>
          <Link to={`/booking/${_id}`}> <Button>contact</Button></Link>
         
        </Card>
        }
          
      
      </div>
    
  );
};

export default Doctor;