import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
    

export const CreateChannel = ()=> {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add new Channel
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title  id="add-channel__title" >
            {<p className="text-slate-400 hover:text-sky-400">
            Adding Channel
            </p>}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Channel Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your channelName" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Add member</Form.Label>
        <Form.Control type="text" placeholder="Member name" />
      </Form.Group>
     
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="info" onClick={handleClose}>
            Add new Channel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}