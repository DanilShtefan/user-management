import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../features/usersSlice";

const UserForm = () => {
  const dispatch = useDispatch();
  const selectedUser = useSelector((state) => state.users.selectedUser);

  const [user, setUser] = useState(
    selectedUser || {
      name: "",
      surname: "",
      age: "",
      email: "",
    }
  );

  useEffect(() => {
    if (selectedUser) {
      setUser(selectedUser);
    } else {
      setUser({
        name: "",
        surname: "",
        age: "",
        email: "",
      });
    }
  }, [selectedUser]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(user));
  };

  if (!selectedUser) return null;

  return (
    <form onSubmit={handleSubmit} className="user-form-container">
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="text"
        name="surname"
        value={user.surname}
        onChange={handleChange}
        placeholder="Surname"
      />
      <input
        type="number"
        name="age"
        value={user.age}
        onChange={handleChange}
        placeholder="Age"
      />
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default UserForm;
