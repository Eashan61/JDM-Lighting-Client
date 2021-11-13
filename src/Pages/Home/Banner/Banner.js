import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Banner = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/SrL0DKB/jdm.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/rsHv58y/jdm2.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/RTZ9zm0/jdm3.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
