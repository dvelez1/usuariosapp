import React from "react";

export const UserRow = ({user}) => {
  return (
    <tr>
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
          alt={user.last_name}
        />
      </td>
    </tr>
  );
};
