import React,{useState} from "react";

const OrderTable = props => {
  const [userId, setUser] = useState(null);
  const [orders,setOrders] = useState(null);
  const handleInputChange = event => {
       setUser(event.target.value);
  };
  return (
  <>
  <form
  onSubmit={async event => {
    event.preventDefault();
    let orders = await props.findOrder(userId);
    console.log(orders.usersDetails.orders);
    setOrders(orders.usersDetails.orders);
  }}
>
  <label>Name</label>
  <input
    type="text"
    name="userId"
    onChange={handleInputChange}
  />
  <button type="submit">Get Orders</button>
</form>
{orders && (
    <table>
    <thead>
      <tr>
        <th>Phone Number</th>
        <th>Sub Total</th>
      </tr>
    </thead>
    <tbody>
      {orders ? (
        orders.map(order => (
          <tr key={order._id}>
            <td>{order.subTotal}</td>
            <td>{order.phoneNumber}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No Orders</td>
        </tr>
      )}
    </tbody>
  </table>
)}

  </>
)};

export default OrderTable;
