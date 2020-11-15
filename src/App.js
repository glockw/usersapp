/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";

import "./App.css";
import Users from "./users/Users";
import get from "./service";

function App() {
  const [users, setUsers] = useState([]);

  const userClousure = (prev) => {
    return (recent) => {
      setUsers([...prev, ...recent]);
    };
  };
  const [page, setPage] = useState(0);

  const handleScroll = (e) => {
    let element = e.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    const set_users = userClousure(users);
    get(page, set_users);
    // Actualiza el título del documento usando la API del navegador
  }, [page, users]);

  return (
    <div className="container" onScroll={handleScroll}>
      <Users users={users} />
    </div>
  );
}

export default App;
