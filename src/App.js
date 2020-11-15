/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import "./App.css";
import Users from "./users/Users";
import getUsers from "./service";

function App() {
  const [users, setUsers] = useState([]);

  const userClousure = (prev) => (recent) => setUsers([...prev, ...recent]);

  const [page, setPage] = useState(0);

  const handleScroll = (e) => {
    let element = e.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    getUsers(page, userClousure(users));
  }, [page, users]);

  return (
    <div className="container" onScroll={handleScroll}>
      <Users users={users} />
    </div>
  );
}

export default App;
