import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'; 
import Form from 'react-bootstrap/Form';

function Header() {
    const [showModal, setShowModal] = useState(false);

    const handleAddButtonClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return(
        <div>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">Transactions</Navbar.Brand>
                    <Button variant="dark" onClick={handleAddButtonClick}>Add</Button>
                </Container>
            </Navbar>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Transaction</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <Form.Group className="mb-3" controlId="amount">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control type="number" placeholder="Amount" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="date">
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date" placeholder="Date" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="date">
                            <Form.Label>Category</Form.Label>
                            <Form.Control type="text" placeholder="Category" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="transactionType">
                            <div className="tabs-container">
                                <Form.Check type="radio" label="Transaction" name="transactionType" id="transactionRadio" className="tab-radio"/>
                                <Form.Check type="radio" label="Expense" name="transactionType" id="expenseRadio" className="tab-radio"/>
                            </div>
                        </Form.Group>
                        <Button className="w-100" variant="primary" type="submit">
                            Add transaction
                        </Button>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Header;