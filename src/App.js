import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (name, age) => {
    console.log("invoked!");
    console.log(name, age);
    setUserList((prevUserList) => [
      ...prevUserList,
      { name: name, age: age, id: Math.random().toString() },
    ]);
  };
  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </>
  );
}

export default App;
