const getUsers = (page, setUser) => {
  fetch(`https://randomuser.me/api/?page=${page}&results=9&seed=abc`)
    .then((response) => response.json())
    .then((users) => {
      setUser(cleanAndSet(users));
    });
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

export default getUsers;
