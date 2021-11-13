import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const Reviews = () => {
  const { user } = useAuth();
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch(`https://thawing-tundra-19894.herokuapp.com/review`)
      .then((res) => res.json())
      .then((data) => {
        const myOrder = data.filter((x) => x.email === user.email);
        setReview(myOrder);
      });
  }, []);
  return (
    <div id="reviews">
      <h2 className="text-success">Our consumers review:</h2>

      <Container>
        <Row xs={1} md={2} lg={4} className="g-4">
          {review.map((review) => (
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={review.img} />
                <Card.Body>
                  <Card.Title>{review.name}</Card.Title>
                  <Card.Title>{review.email}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Reviews;
