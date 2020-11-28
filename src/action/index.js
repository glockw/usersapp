import * as api from "../api";

export function fethUsers() {
  return (dispatch, getState) => {
    const { page } = getState().users;
    api
      .getUsers(page + 1)
      .then((response) => response.json())
      .then((res) => {
        dispatch(fetch_users_action(res));
      });
  };
}

const fetch_users_action = (resp) => {
  const users = cleanAndSet(resp);
  return {
    type: "FETCH_USERS_SUCCEEDED",
    payload: {
      users: {
        users,
      },
    },
  };
};
const cleanAndSet = ({ results }) => {
  const us = results.map(
    ({
      name: { first, last },
      dob: { date, age },
      picture: { large },
      email,
      gender,
      location,
      city,
      state,
      country,
      nat,
    }) => ({
      name: [first, last].join(" "),
      picture: large,
      dob: { date, age },
      age: age,
      gender: gender,
      email: email,
      address: { ...location, city, state, country },
      nat: nat,
    })
  );
  return us;
};
