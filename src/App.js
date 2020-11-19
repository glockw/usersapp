/* eslint-disable no-undef */
import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import Users from "./users/Users";
import getUsers from "./service";
import FilterBar from "./filterBar/FilterBar";

function App() {
  const [users, setUsers] = useState([]);

  const userClousure = (prev) => (recent) => setUsers([...prev, ...recent]);
  const loader = useRef(null);
  const [page, setPage] = useState(0);
  const [filter, setFilter] = useState({ name: null, gender: "none" });

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPage((page) => page + 1);
    }
  };


  const loadFiler = ({ name, gender }) =>
    (name.toLowerCase().indexOf(filter.name?.toLowerCase()) >= 0 ||
      filter.name == null) &&
    (filter.gender === "none" || filter.gender === gender);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
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
      <FilterBar filter={setFilter} />
      <Users users={users.filter(loadFiler)} />

      <div ref={loader} className="loader">
        <h3>Loading...</h3>
      </div>
    </div>
  );
}

export default App;
