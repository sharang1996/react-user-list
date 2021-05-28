import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please set a valid name and age (non-empty values).",
      });
      return;
    }

    //typecasting to int
    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Please set an age (> 0).",
      });
      return;
    }

    props.onAddUser(username, age);
    setUsername("");
    setAge("");
  };

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onErrorHandler={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={usernameChangeHandler}
          ></input>
          <label htmlFor="age">Age (years)</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={ageChangeHandler}
          ></input>
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
