import React, { useState } from "react";
import UserTable from "../tables/userTable";
import EditUserForm from "../forms/EditUserForm";
import OrderForm from "../forms/OrderForm";
import {addUserApi,addOrderApi,getOrderApi} from "../api";

const Home = () => {
    const usersData = [
        { id: 1, name: "Tania", username: "floppydiskette" },
        { id: 2, name: "Craig", username: "siliconeidolon" },
        { id: 3, name: "Ben", username: "benisphere" }
      ];
      const initialFormState = { id: null, name: "", email: "", phoneNumber: "", password: ""  };
    
      const [users, setUsers] = useState(usersData);
      const [currentUser, setCurrentUser] = useState(initialFormState);
    
      const addUser = async user => {
        await addUserApi("http://localhost:8000/add-user/",user);
        setUsers([...users, user]);
      };

      const addOrder = async order => {
        await addOrderApi("http://localhost:8000/add-order/",order);
      };

      const getOrder = async user => {
        return await getOrderApi("http://localhost:8000/get-order",user);
      };
    
    return (
        <div className="container">
      <h1>Voosh Test</h1>
      <div className="flex-row">
        <div style={{paddingLeft : "3rem"}} className="flex-large">
          <div>
           Add user
            <EditUserForm
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              addUser={addUser}
            />
          </div>
        </div>
        <div style={{paddingLeft : "3rem"}} className="flex-large">
          <div>
           Add order
            <OrderForm
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              addOrder={addOrder}
            />
          </div>
        </div>
        
      </div>
      <div className="flex-large">
          <h2>View Orders</h2>
          <UserTable findOrder={getOrder} users={users} />
        </div>
    </div>
    )
}

export default Home 