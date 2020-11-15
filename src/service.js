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
      dob: { date },
      picture: { medium },
      email,
      gender,
    }) => ({
      name: [first, last].join(" "),
      picture: medium,
      dob: date,
      gender: gender,
      email: email,
    })
  );
  return us;
};

export default getUsers;
