import axios from "axios";

const BASE_API_URL = "`https://randomuser.me/api/";
const client = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export function fetchUsers(page) {
  return client.get(`?page=${page}&results=9&seed=abc`);
}
