import React from 'react'
import { Modal,Button } from 'react-bootstrap';
import { useState } from 'react';

function RestOp({opHours}) {
    console.log(opHours);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
       <Button variant="primary" onClick={handleShow}>
        Operating Hours
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Monday : {opHours?.Monday}</p>
            <p>Tuesday : {opHours?.Tuesday}</p>
            <p>Wednesday : {opHours?.Wednesday}</p>
            <p>Thursday : {opHours?.Thursday}</p>
            <p>Friday : {opHours?.Friday}</p>
            <p>Saturday : {opHours?.Saturday}</p>
            <p>Sunday : {opHours?.Sunday}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default RestOp
