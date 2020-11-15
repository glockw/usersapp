/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";

import "./App.css";
import Users from "./users/Users";

function App() {
  const [users, setUsers] = useState([]);

  const cleanAndSet = ({ results }) => {
    const us = results.map(
      ({ name, dob: { date }, picture: { medium }, email, gender }) => {
        const { first, last } = name;
        return {
          name: [first, last].join(" "),
          picture: medium,
          dob: date,
          gender: gender,
          email: email,
        };
      }
    );
    setUsers(us);
  };
  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=5&seed=abc")
      .then((response) => response.json())
      .then(cleanAndSet);
    // Actualiza el título del documento usando la API del navegador
  },[]);  

  return <Users users={users} />;
}

export default App;
