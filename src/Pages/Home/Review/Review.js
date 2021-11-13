import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";
import { Button, Container, Form } from "react-bootstrap";

const Review = () => {
  const { user } = useAuth();
  const [review, setReview] = useState({});

  const handleNumber = (e) => {
    const newNumber = { ...review };
    newNumber.number = e.target.value;
    setReview(newNumber);
  };
  const handleAddress = (e) => {
    const newAddress = { ...review };
    newAddress.address = e.target.value;
    setReview(newAddress);
  };

  const sendingReview = (e) => {
    e.preventDefault();

    const newReview = review;
    newReview.name = user?.displayName;
    newReview.email = user?.email;
    setReview(newReview);

    axios
      .post("https://thawing-tundra-19894.herokuapp.com/review", review)
      .then((res) => {
        if (res.data.insertedId) {
          alert("added successfully");
          setReview({});
        }
      });
  };
  return (
    <div className="review">
      <h2>Add Review</h2>

      <Container>
        <Form onSubmit={sendingReview}>
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

export default Review;
