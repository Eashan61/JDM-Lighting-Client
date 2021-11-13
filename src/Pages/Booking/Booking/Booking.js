import React from "react";
import "./Booking.css";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import { Button, Container, Form } from "react-bootstrap";

const Booking = () => {
  const { user } = useAuth();
  const { serviceId } = useParams();
  const [service, setService] = useState({});
  const [order, setOrder] = useState({});

  useEffect(() => {
    fetch(`https://thawing-tundra-19894.herokuapp.com/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  const handleNumber = (e) => {
    const newNumber = { ...order };
    newNumber.number = e.target.value;
    setOrder(newNumber);
  };
  const handleAddress = (e) => {
    const newAddress = { ...order };
    newAddress.address = e.target.value;
    setOrder(newAddress);
  };

  const sendingOrder = (e) => {
    e.preventDefault();

    const newOrder = order;
    newOrder.img = service?.img;
    newOrder.title = service?.name;
    newOrder.price = service?.price;
    newOrder.name = user?.displayName;
    newOrder.email = user?.email;
    setOrder(newOrder);

    axios
      .post("https://thawing-tundra-19894.herokuapp.com/order", order)
      .then((res) => {
        if (res.data.insertedId) {
          alert("added successfully");
          setOrder({});
        }
      });
  };

  return (
    <div>
      <h2>This is booking: {serviceId}</h2>
      <img className="responsive" src={service.img} alt="" />
      <h3>{service.name}</h3>
      <h3>{service.time}</h3>

      <Container>
        <Form onSubmit={sendingOrder}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={service?.name}
              type="text"
              placeholder="Enter Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Price</Form.Label>
            <Form.Control
              value={service?.price}
              type="text"
              placeholder="Enter Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={user?.displayName}
              type="text"
              placeholder="Enter Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={user?.email}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              onChange={handleNumber}
              type="number"
              placeholder="Phone Number"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Address</Form.Label>
            <Form.Control
              onChange={handleAddress}
              type="text"
              placeholder="Address"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Booking;
