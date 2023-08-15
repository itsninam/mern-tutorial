import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [userInput, setUserInput] = useState({
    name: "",
    age: "",
    username: "",
  });

  useEffect(() => {
    axios.get("http://localhost:3001/getUsers").then((data) => {
      setUsers(data.data);
    });
  }, []);

  const handleSubmitUser = (event) => {
    event.preventDefault();

    const newUser = {
      name: userInput.name,
      age: userInput.age,
      username: userInput.username,
    };

    axios.post("http://localhost:3001/createUser", newUser).then((response) => {
      console.log("User created");
      setUsers([...users, newUser]);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        {users.map((user) => {
          return (
            <div key={user.age}>
              <p>Name: {user.name}</p>
              <p>Age: {user.age}</p>
              <p>Username: {user.username}</p>
            </div>
          );
        })}
      </header>

      <form action="" onSubmit={handleSubmitUser}>
        <input
          type="text"
          placeholder="Enter name"
          value={userInput.name}
          onChange={(event) =>
            setUserInput({ ...userInput, name: event.target.value })
          }
        />
        <input
          type="number"
          placeholder="Enter age"
          value={userInput.age}
          onChange={(event) =>
            setUserInput({ ...userInput, age: event.target.value })
          }
        />
        <input
          type="text"
          placeholder="Enter username"
          value={userInput.username}
          onChange={(event) =>
            setUserInput({ ...userInput, username: event.target.value })
          }
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
