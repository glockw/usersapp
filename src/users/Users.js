import React from "react";

import User from "./User";
const Users = ({users}) => {
  const style = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop:"10rem",
  };
  return (
    <div style={style}>
      {users.map((user, index) => (
        <User key={user.email + index} user={user} />
      ))}
    </div>
  );
};

export default Users;
