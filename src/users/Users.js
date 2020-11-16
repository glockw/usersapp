import React from "react";

import User from "./User";
import "./users.css";
const Users = ({ users }) => {
  const style = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "10rem",
  };
  return (
    <div  className="users-list">
      {users.map((user, index) => (
        <User key={user.email + index} user={user} />
      ))}
    </div>
  );
};

export default Users;
