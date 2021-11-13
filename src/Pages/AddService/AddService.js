import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./AddService.css";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://thawing-tundra-19894.herokuapp.com/services", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("added successfully");
          reset();
        }
      });
  };
  return (
    <div className="add-service">
      <h2>Add a product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true, maxLength: 500 })}
          placeholder="name"
        />
        <input {...register("info")} placeholder="product info" />
        <input type="number" {...register("price")} placeholder="price" />
        <input {...register("img")} placeholder="profilepic" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddService;
