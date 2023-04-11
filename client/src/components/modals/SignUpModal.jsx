

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function SignUpModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        Sign Up
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
         <Form.Control type='text' placeholder='First name'/>
         <Form.Control type='text' placeholder='Surname'/>
         <Form.Control type='email' placeholder='email'/>
         <Form.Control type='number' placeholder='phone number'/>
         <Form.Control type='password' placeholder='password'/>

         <Form.Check type="checkbox" label="Check me out" />
     
      <Modal.Footer>
      <Button variant="success" type="submit">
        Submit
      </Button>
        </Modal.Footer>
     
          </Form>
        </Modal.Body>
    
      </Modal>
    </>
  );
}

// render(<SignUpModal />);
export default SignUpModal
