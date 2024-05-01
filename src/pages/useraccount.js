import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const UserAccount = ({ show, setShow }) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });

  useEffect(() => {
    const userData = localStorage.getItem("users");
    if (userData) {
      const parsedUserData = JSON.parse(userData);
      setUser({
        firstName: parsedUserData[0].firstName,
        lastName: parsedUserData[0].lastName,
        email: parsedUserData[0].email,
        phone: parsedUserData[0].phone
      });
    }
  }, []);

  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{user.firstName}'s Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" value={user.firstName} readOnly />
          </Form.Group>
          <Form.Group controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" value={user.lastName} readOnly />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value={user.email} readOnly />
          </Form.Group>
          <Form.Group controlId="phone">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" value={user.phone} readOnly />
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default UserAccount;
