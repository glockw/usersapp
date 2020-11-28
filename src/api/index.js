const API_BASE = "https://randomuser.me/api";

export const getUsers = (page) => {
  return fetch(`${API_BASE}/?page=${page}&results=9&seed=abc`);
};
