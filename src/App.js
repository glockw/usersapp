/* eslint-disable no-undef */
import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "./action";
import "./App.css";
import FilterBar from "./filterBar/FilterBar";
import Users from "./users/Users";

function mapStateToProps(state) {
  const { page, users } = state.users;
  return { page, users };
}

function App({ users, dispatch }) {
  const loader = useRef(null);
  const [filter, setFilter] = useState({ name: null, gender: "none" });

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      dispatch(fetchUsers());
    }
  };

  const loadFilter = ({ name, gender }) =>
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

  return (
    <div className="container">
      <FilterBar filter={setFilter} />
      <Users users={users.filter(loadFilter)} />

      <div ref={loader} className="loader">
        <h3>Loading...</h3>
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(App);
