import React from "react";
import axios from "axios";
import UserCard from "./UserCard";
import { useEffect, useState } from "react";
import "./index.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(data);
    })();
  }, []);
  return (
    <div className="users">
      {users.map(({ name, email, phone, website, username, id }) => (
        <UserCard
          key={id}
          id={id}
          name={name}
          email={email}
          users={users}
          phone={phone}
          website={website}
          username={username}
          setUsers={setUsers}
        />
      ))}
    </div>
  );
};

export default Users;
