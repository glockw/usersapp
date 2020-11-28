import * as api from "../api";

export function fetchUsers() {
  return (dispatch, getState) => {
    const { page } = getState().users;
    api
      .fetchUsers(page + 1)
      .then((resp) => dispatch(fetchUsersSucceeded(resp)));
  };
}

const fetchUsersSucceeded = (data) => {
  return {
    type: "FETCH_USERS_SUCCEEDED",
    payload: {
      users: {
        users: clean(data),
      },
    },
  };
};

const clean = (results) => {
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
