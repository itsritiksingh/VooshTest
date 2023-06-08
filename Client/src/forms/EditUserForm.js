import React, { useState, useEffect } from "react";

const EditUserForm = props => {
  const initialFormState = { name: "", email: "", phoneNumber: "", password: ""  };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const resetAddUser = () => {
    setUser(initialFormState);
    props.setCurrentUser(initialFormState);
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        props.addUser(user);
        resetAddUser();
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Email</label>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleInputChange}
      />
      <label>Phone Number</label>
      <input
        type="text"
        name="phoneNumber"
        value={user.phoneNumber}
        onChange={handleInputChange}
      />
      <label>Password</label>
      <input
        type="text"
        name="password"
        value={user.password}
        onChange={handleInputChange}
      />
      <button type="submit">Add user</button>
    </form>
  );
};

export default EditUserForm;
