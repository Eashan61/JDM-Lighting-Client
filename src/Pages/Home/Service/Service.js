import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { name, info, price, img, _id } = service;
  return (
    <div className="service">
      <img className="responsive" src={img} alt="" />
      <h3>{name}</h3>
      <h5>Price: {price}</h5>
      <p className="p-2">{info}</p>
      <Link to={`/booking/${_id}`}>
        <button className="btn btn-primary m-3">
          Buy this {name.toLowerCase()}
        </button>
      </Link>
    </div>
  );
};

export default Service;
