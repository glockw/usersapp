/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";

import "./App.css";
import Users from "./users/Users";
import getUsers from "./service";
import FilterBar from "./filterBar/FilterBar";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    page: state.page,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch({ type: "NEXT_PAGE" }),
    decrement: () => dispatch({ type: "PREV_PAGE" }),
  };
}

function App({ page, increment }) {
  const [users, setUsers] = useState([]);

  const userClousure = (prev) => (recent) => setUsers([...prev, ...recent]);
  const loader = useRef(null);
  const [filter, setFilter] = useState({ name: null, gender: "none" });

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      increment();
    }
  };

  const loadFiler = ({ name, gender }) =>
    (name.toLowerCase().indexOf(filter.name?.toLowerCase()) >= 0 ||
      filter.name == null) &&
    (filter.gender === "none" || filter.gender === gender);

  useEffect(() => {
    const set_users = userClousure(users);
    get(page, set_users);
    // Actualiza el título del documento usando la API del navegador
  }, [page, users]);

  return (
    <div className="container">
      <FilterBar filter={setFilter} />
      <Users users={users.filter(loadFiler)} />

      <div ref={loader} className="loader">
        <h3>Loading..{page}</h3>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
