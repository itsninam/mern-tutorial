import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/getUsers").then((data) => {
      setUsers(data.data);
    });
  });

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
    </div>
  );
}

export default App;
