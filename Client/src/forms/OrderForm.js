import React, { useState, useEffect } from "react";

const OrderForm = props => {
  const [order, setUser] = useState({});

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...order, [name]: value });
  };

  const resetAddUser = () => {
    setUser({});
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        props.addOrder(order);
        resetAddUser();
      }}
    >
      <label>User id</label>
      <input
        type="text"
        name="userId"
        value={order.userId}
        onChange={handleInputChange}
      />
      <label>Sub total</label>
      <input
        type="text"
        name="subTotal"
        value={order.subTotal}
        onChange={handleInputChange}
      />
      <label>Phone Number</label>
      <input
        type="text"
        name="phoneNumber"
        value={order.phoneNumber}
        onChange={handleInputChange}
      />
      <button type="submit">Add order</button>
    </form>
  );
};

export default OrderForm;
