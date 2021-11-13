import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const ManageAllOrders = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch(`https://thawing-tundra-19894.herokuapp.com/order`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  console.log(service);
  const cancelOrder = (id) => {
    fetch(`https://thawing-tundra-19894.herokuapp.com/order/${id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Deleted Seccessfully");
          const newAllUser = service.filter((a) => a._id !== id);
          setService(newAllUser);
        }
      });
  };

  return (
    <div id="manage-allorders">
      <h3>This is Manage All orders:</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Event Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        {service.map((x) => (
          <tbody>
            <tr>
              <td>{x?.name}</td>
              <td>{x?.title}</td>
              <td>{x?.email}</td>
              <td>
                {" "}
                <button
                  onClick={() => cancelOrder(x._id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>{" "}
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default ManageAllOrders;
