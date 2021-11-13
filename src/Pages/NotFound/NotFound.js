import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <img
        className="responsive"
        src="https://i.ibb.co/3Yy6Mtd/404.jpg"
        alt=""
      />
      <Link to="/">
        <button className="btn btn-danger">Go Back</button>
      </Link>
    </div>
  );
};

export default NotFound;
