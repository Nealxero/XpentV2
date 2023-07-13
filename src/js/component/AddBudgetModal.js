import React from 'react'
import { Modal, Form } from 'bootstrap'
import { ModalBody } from 'react-bootstrap'

export default function AddBudgetModal() {
  return (
    <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit}> 
            <Modal.Header closeButton>
                <Modal.Title>
                    New Budget
                </Modal.Title>
            </Modal.Header>
            <Modal.Body> 
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>
                        Name
                    </Form.Label>
                    <Form.Control type="text" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="max">
                    <Form.Label>
                        Max Spending
                    </Form.Label>
                    <Form.Control type="number" required:min={0} step ={0.01}/>
                </Form.Group>
            </Modal.Body>
        </Form>
    </Modal>
  )
}
