import React, { useEffect, useState } from "react";
import { usersApi } from "../api/userAPI";

export const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const resp = await usersApi.get("https://reqres.in/api/users");
    setUsers(resp.data.data);
  };

  return (
    <div className="mt-5">
      <h1>Users</h1>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Name</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.email}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.first_name} {user.last_name}</td>
              <td>
                <img 
                src={user.avatar}
                className="img-thumbnail"
                style={{
                    width:50
                }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
