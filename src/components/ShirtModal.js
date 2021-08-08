import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { InputGroup, Form, Modal, FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { AddShirt, EditShirt } from "../service/shirts";

export const NewShirtModal = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <div>
        <Button onClick={handleShow} className='btn btn-success'>New Shirt</Button>
        <ShirtModal shirt={null} handleFormSubmit={AddShirt} show={show} handleClose={handleClose} />
    </div>
}

export const EditShirtModal = ({ shirt }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <div>
        <Button onClick={handleShow} className='btn btn-warning'>Edit Shirt</Button>
        <ShirtModal shirt={shirt} handleFormSubmit={EditShirt} show={show} handleClose={handleClose} />
    </div>
}

const ShirtModal = ({ shirt, handleFormSubmit, show, handleClose }) => {
    const [modalShirt, setModalShirt] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        setModalShirt(shirt);
    }, [shirt]);

    return (
        <div style={{ textAlign: 'right' }}>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Form onSubmit={event => {
                event.preventDefault();
                handleFormSubmit(dispatch, modalShirt);
            }}>
                <Modal.Body>
                    <InputGroup>
                        <FormControl value={modalShirt === null ? '' : modalShirt.shirtName}
                            onChange={event => setModalShirt({ ...modalShirt, shirtName: event.target.value })} />
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button type='submit' variant="primary" onClick={handleClose}>
                        Save
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
        </div>
    );
}