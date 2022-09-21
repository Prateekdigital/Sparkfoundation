import React from 'react'
import "../Component/contact.css"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


const Contact = () => {
  return (
    <div className='mycontact'>
          <h1>Contact</h1>
           <div className="location">
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d947823.3071202649!2d77.20829480539405!3d21.879326737178232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd609e24ff861f5%3A0xce028c37c85f4c73!2sBetul%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1663313908490!5m2!1sen!2sin"></iframe>

           </div>
           <div className="ShortForm">
               <h2>Contact Form</h2> 
           <Form>
      <Row className="mb-3">

      <Form.Group as={Col} controlId="formGridUsername">
          <Form.Label>Name</Form.Label>
          <Form.Control type="txt" placeholder="Name" />
        </Form.Group>
         

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Enter Your Massage</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter Massage"></textarea>
      </div>



    
      <Button variant="dark" type="submit">
        SEND MASSAGE
      </Button>
    </Form>
               
           </div>
      
    </div>
  )
}

export default Contact
