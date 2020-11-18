import React from "react";

import User from "../user/User";
import "./users.css";
const Users = ({ users }) => {
  return (
    <div className="users-list">
      {users.map((user, index) => (
        <User key={user.email + index} user={user} />
      ))}
    </div>
  );
};

export default Users;
