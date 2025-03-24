import React from "react";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>User Management</h1>
      <div className="container">
        <UserList />
        <UserForm />
      </div>
    </div>
  );
}

export default App;
