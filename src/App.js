/* eslint-disable no-undef */
import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import Users from "./users/Users";
import getUsers from "./service";

function App() {
  const [users, setUsers] = useState([]);

  const userClousure = (prev) => (recent) => setUsers([...prev, ...recent]);
  const loader = useRef(null);
  const [page, setPage] = useState(0);

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPage((page) => page + 1);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "0px 0px 30px 0px",
      threshold: 1.0,
    });
    const { current } = loader;
    if (current) {
      observer.observe(current);
    }
  }, []);

  useEffect(() => {
    getUsers(page, userClousure(users));
  }, [page]);

  return (
    <div className="container">
      <Users users={users} />

      <div ref={loader} className="loader">
        <h3>Loading...</h3>
      </div>
    </div>
  );
}

export default App;
