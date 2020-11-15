import React from "react";

import User from "./User";
const Users = ({users}) => {
  const style = {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  };
  return (
    <div style={style}>
      {users.map((user) => (
        <User key={user.email} user={user} />
      ))}
    </div>
  );
};

export default Users;
