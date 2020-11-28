const initalState = {
  page: 0,
  users: [],
};

export default function Users(state = initalState, action) {
  switch (action.type) {
    case "FETCH_USER_SUCCEEDED":
      const { users } = action.payload;
      return {
        page: state.page + 1,
        users: state.users.concat(users),
      };
  }
}
