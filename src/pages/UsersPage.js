import React from "react";
// I created a Custom Hook, that will handle the related logic to the component
import { useUsers } from "../hooks/useUsers";
import { UserRow } from "../components/UserRow";



export const UsersPage = () => {

  const { users } = useUsers();

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
            {/* I created a component with the row of the table. I sending the key required for the map and the user list */}
            {
                users.map( user => <UserRow 
                    key={user.email} 
                    user={user}/>)
            }

          {/*{users.map((user) => (
            <tr key={user.email}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>
                {user.first_name} {user.last_name}
              </td>
              <td>
                <img
                  src={user.avatar}
                  className="img-thumbnail"
                  style={{
                    width: 50,
                  }}
                  alt={ user.last_name }
                />
              </td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};
